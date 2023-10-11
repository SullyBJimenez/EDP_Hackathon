import fs from 'fs';
import { faker } from '@faker-js/faker';

faker.seed(123);

/*
•	Name
•	Phone number
•	Job role - HR, NotHR
•	Work location
•	Salary
•	reports_to: person
•	is_hr: boolean (replaced by roles)

*/

// CEO

// C-level

// everyone else

const ceoData = {
    _id: '1',
    avatar: faker.image.avatar(),
    email: 'aschnitzer@travelers.com',
    password: 'theboss',
    phoneNumber: faker.phone.number(),
    firstName: 'Alan',
    lastName: 'Schnitzer',
    jobRole: 'CEO',
    location: 'Hartford',
    salary: 1000000,
    reports_to: '', // might remove
};

const justinData = {
    _id: '2',
    avatar: faker.image.avatar(),
    email: 'jperry@travelers.com',
    password: 'theboss',
    phoneNumber: faker.phone.number(),
    firstName: 'Justin',
    lastName: 'Perry',
    jobRole: 'Manager',
    location: 'Hartford',
    salary: 500000,
    reports_to: '1', // might remove
};

const markData = {
    _id: '3',
    avatar: faker.image.avatar(),
    email: 'aschwartz@travelers.com',
    password: 'theboss',
    phoneNumber: faker.phone.number(),
    firstName: 'Mark',
    lastName: 'Schwartz',
    jobRole: 'Manager',
    location: 'Hartford',
    salary: 500000,
    reports_to: '1', // might remove
};

function createRandomUser() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.helpers.unique(faker.internet.email, [
        firstName,
        lastName,
    ]);
    const phoneNumber = faker.phone.number();
    const password = faker.internet.password({ length: 20 });

    return {
        _id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        email,
        password,
        phoneNumber,
        firstName,
        lastName,
        jobRole: faker.helpers.arrayElement(['HR', 'Tech', 'Sales', 'Customer Service']),
        location: faker.helpers.arrayElement(['Hartford', 'St. Paul', 'West Bridgewater', 'New York']),
        salary: faker.number.int({ min: 50000, max: 200000 }),
        reports_to: faker.helpers.arrayElement(['2', '3'])
    };
}

const peopleCollection = [ceoData, justinData, markData]

for (let i = 0; i < 997; i++) {
    let employee = createRandomUser();
    peopleCollection.push(employee)
}

const jsonData = JSON.stringify(peopleCollection)

fs.writeFile("data.json", jsonData, function (err) {
    if (err) {
        console.log(err);
    }
});