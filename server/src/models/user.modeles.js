import mongoose from "mongoose";
import bcrypt from'bcryptjs';
// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['farmer', 'buyer', 'researcher', 'company'], required: true }
});

// Hash the password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', userSchema);

export default User;
















// const user = new mongoose.Schema({
    //     name: {
    //         type: String,
    //         required: true,
    //     },
    //     email: {
    //         type: String,
    //         required: true,
    //         unique: true,
    //     },
    //     password: {
    //         type: String,
    //         required: true,
    //     },
    //     mobile_number:{
    //         type: Number,
    //         required: true,
    
    //     },
    
    // },{timestamps:true})
    // models/models.js
    // const mongoose = require('mongoose');
    // const Schema = mongoose.Schema;