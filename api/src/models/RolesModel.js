const { Schema, model } = require('mongoose');

const ROLES = ['admin', 'user']

const roleSchema = new Schema({
    name: String
}, {
    timestamps: false,
    versionKey: false
});

const Roles = model('Role', roleSchema);

module.exports = {
    Roles,
    ROLES
}