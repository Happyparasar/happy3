const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    rollNo: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    fatherName: { type: String },
    adharCardNo: { type: String },
    mobileNo: { type: String },
    createdAt:Date,
    updatedAt: Date
})

StudentSchema.plugin(timestamps, { index: true});
module.exports = mongoose.model('Student', StudentSchema);