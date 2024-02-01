// middleware/signupMiddleware.js

import User from '../models/user.model';

const signupMiddleware = async (req, res, next) => {
    try {
        const { name, dob, aadharNo, phoneNo, address, role, profileImage, gender, preferredLang, education, accountNo, panNo } = req.body;

        const errors = [];

        if (!name) {
            errors.push({ field: 'name', message: 'Name is required' });
        }
        if (!email) {
            errors.push({ field: 'email', message: 'Email is required' });
        }
        if (!dob) {
            errors.push({ field: 'dob', message: 'Date of Birth is required' });
        }
        if (!aadharNo) {
            errors.push({ field: 'aadharNo', message: 'Aadhar Number is required' });
        }
        if (!phoneNo) {
            errors.push({ field: 'phoneNo', message: 'Phone Number is required' });
        }
        if (!address) {
            errors.push({ field: 'address', message: 'Address is required' });
        }
        if (!role) {
            errors.push({ field: 'role', message: 'Role is required' });
        }
        if (!gender) {
            errors.push({ field: 'gender', message: 'Gender is required' });
        }
        if (!education) {
            errors.push({ field: 'education', message: 'Education is required' });
        }

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ aadharNo });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }


        next(); // Move to the next middleware/controller
    } catch (e) {
        res.status(500).json({ message: 'Internal Server Error', error: e })
    }
}


module.exports = {
    signupMiddleware
}