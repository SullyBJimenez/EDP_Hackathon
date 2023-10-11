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

// TODO tie salaries with job role, +-5%

function generateSalary(jobRole) {
    const percentage = faker.number.float({ min: 0.80, max: 1.2, precision: 0.01 });

    if (jobRole === 'HR') {
        return 80000 * percentage;
    }
    else if (jobRole === 'Tech') {
        return 200000 * percentage;
    }
    else if (jobRole === 'Sales') {
        return 100000 * percentage;
    }
    else if (jobRole === 'Customer Service') {
        return 50000 * percentage;
    }
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
    const jobRole = faker.helpers.arrayElement(['HR', 'Tech', 'Sales', 'Customer Service']);
    const salary = generateSalary(jobRole);

    return {
        _id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        email,
        password,
        phoneNumber,
        firstName,
        lastName,
        jobRole,
        location: faker.helpers.arrayElement(['Hartford', 'St. Paul', 'West Bridgewater', 'New York']),
        salary,
        reports_to: faker.helpers.arrayElement(['2', '3'])
    };
}

const peopleCollection = [ceoData, justinData, markData];

for (let i = 0; i < 997; i++) {
    let employee = createRandomUser();
    peopleCollection.push(employee)
};

const jsonData = JSON.stringify(peopleCollection);

fs.writeFile("data.json", jsonData, function (err) {
    if (err) {
        console.log(err);
    }
});