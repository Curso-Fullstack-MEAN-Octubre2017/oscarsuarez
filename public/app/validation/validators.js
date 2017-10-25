if (typeof  validate !== "function") {
    validate = require('validate.js');
}

const Validators = {
    validatePet: function (pet) {
        return validate(pet, {
            name: {
                presence: true,
                length: {
                    minimum: 3,
                    maximum: 20,
                    message: "debe tener entre 3 y 20 caracteres"
                },

            }
        });
    }
};

if (typeof  module !== "undefined" && module.exports) {
    module.exports = Validators;
}