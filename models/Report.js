const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    interviewer_name : {
        type: String,
        default: ""
    },
    candidate_name : {
        type: String,
        default: ""
    },
    meeting: {type : mongoose.Schema.Types.ObjectId, ref: "Meeting"},

    emotions_percentage: {
        type: Number,
        default: 0
    },
    quiz_percentage: {
        type: Number,
        default: 0
    },
    cv_percentage:{
        type: Number,
        default: 0
    },
    overall_score:{
        type: Number,
        default: 0
    },
    chartData: [[]],
    comments:{
        type: String,
        default: ""
    },
    hired :{
        type: Boolean,
        default: false
    }

}, {
    timestamps: true 
})

module.exports = mongoose.model("Report", reportSchema);