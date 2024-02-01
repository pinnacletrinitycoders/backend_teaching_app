import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true,
    },
    aadharNo: {
        type: Number,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'Student',
        enum: ['Student', 'Teacher', 'Admin']
    },
    profileImage: String,
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']
    },
    preferredLang: {
        type: String,
        default: 'English',
        enum: ['Hindi', 'English', 'Other']
    },
    education: {
        type: String,
        required: true
    },
    accountNo: Number,
    panNo: String
});

module.exports = mongoose.model('User', userSchema);
