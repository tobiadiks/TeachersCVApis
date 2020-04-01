var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const teacherSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        experience: {
            type: Number,
        },
        classLevel: {
            type: Number,
        },
        speciality: {
            type:String,
            default:"all"
        },
        location: {
            type:String,
        },
        isEmployed: {
            type: Boolean,
            required: true
        }

    },
    {
        timestamps:true,
    }
);


const Teacher = mongoose.model("Teacher",teacherSchema);

module.exports = Teacher;