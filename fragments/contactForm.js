let faker = require('faker');

module.exports = {

    CONTACTFORM(type) {
        return {
            type: type,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: 'impleniabrightgrove@gmail.com',
            company: faker.company.companyName(),
            phone: faker.phone.phoneNumber('012#######'),
            address: faker.address.streetAddress() + " " + faker.address.zipCode() + " " + faker.address.county(),
            message: faker.lorem.sentence(),
        }
    }
}
