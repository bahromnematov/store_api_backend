const express = require('express');
const router = express.Router();
const OTP = require('../model/otp')
const SMS = require('../sms')
const otpGen = require('otp-generator')

const sendSMS = (phone, otp) => {
    const ESKIZ_EMAIL = process.env.ESKIZ_EMAIL
    const ESKIZ_PASSWORD = process.env.ESKIZ_PASSWORD
    const sms = new SMS({login: ESKIZ_EMAIL, password: ESKIZ_PASSWORD, webhookurl:'webhookurl'});
    sms.send({phone, message: otp})
}

router.post('/send-otp', async (req, res) => {
    try {
        const { phone } = req.body;

        await OTP.deleteMany({ phone })

        const otp = otpGen.generate(4, {
            digits: true,
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false
        })

        sendSMS(phone, otp)
        
        await OTP.create({ phone, otp })

        res.status(200).json({
            success: true,
            message: 'OTP sent successfully'
        })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

router.post('/verify-otp', async (req, res) => {
    try {
        const { phone, otp } = req.body;

        const otpData = await OTP.findOne({ phone, otp })

        if(!otpData) return res.status(404).json({ success: false, message: "Incorrect OTP or phone number!" });

        await OTP.findByIdAndUpdate(otpData._id)

        res.status(200).json({ success: true, message: "OTP verify successful."});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

module.exports = router;