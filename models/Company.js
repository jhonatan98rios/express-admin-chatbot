const mongoose = require('mongoose');

// Definindo os status como constantes
const Status = {
    INACTIVE: 0,
    ACTIVE: 1,
    TESTING: 2
};

const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone_number: { type: String, required: true },
    status: { type: Number, enum: Object.values(Status), required: true },
    created_at: { type: String, default: () => new Date().toISOString() },
    instructions: { type: String, required: true },
    footer: { type: String, required: true },
});

module.exports = mongoose.model('Company', companySchema);
