const mongoose = require('mongoose');
const { Schema } = mongoose;
const loginSchema = new Schema({
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    country_id: {
        type: String,
        required: true,
    },
    mobile_number: {
        type: String,
        required: true,
        unique: true
    },
    about: {
        type: String,
        required: false,
    },
    fcmToken: {
        type: String,
        required: false,
    },
    profilePicture: {
        type: String,
        required: false
    }
});

const Loginmodel = mongoose.model("login", loginSchema);

module.exports = Loginmodel;
