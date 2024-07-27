// CREATING USER SCHEMA
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        //role with which the user is creating account for
        type: String,
        enum: ['applicant', 'recruiter'],
        required: true
    },
    profile: {
        bio: { type: String },
        skills: [{ type: String }],
        resume: { type: String }, // URL to resume file
        resumeOriginalName: { type: String },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, //used by only recruiter
        profilePhoto: {
            type: String,
            default: ""
        }
    },
}, { timestamps: true });
export const User = mongoose.model('User', userSchema);