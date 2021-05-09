var faker = require('faker');

var database = { users: []};

for (var i = 1; i<= 100; i++) {
  var user = {
    id: i,
    firstName: faker.name.firstName(),
    middleName: faker.name.middleName(),
    lastName: faker.name.lastName(),
    dob: faker.date.past(),
    gender: faker.name.gender(),
    email: faker.internet.email(),
    description: faker.lorem.paragraphs()
  };

  var addressCount = faker.random.number(4);
  var address = [];
  for (var ac = 1; ac<= addressCount; ac++) {
    address.push({
      address1: faker.address.streetAddress(),
      address2: faker.address.secondaryAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      pincode: faker.address.zipCode()
    });
  }
  user.address = address;

  database.users.push(user);
}

console.log(JSON.stringify(database));
