const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Customers API',
    description: 'API to get customer data.',
  },
  // host: 'localhost:3002',
  host: 'https://customer-importer-exercise-api-c36ac5fc1e91.herokuapp.com/',
  // schemes: ['http'],
  schemes: ['https'],
  definitions: {
    Customers: [
      {
        "customerId": 1,
        "firstName": "Henry",
        "lastName": "White",
        "emailAddresses": [
          {
            "emailAddressId": 1,
            "emailAddress": "henry.white@gmail.com"
          },
          {
            "emailAddressId": 2,
            "emailAddress": "hrwhite@gmail.com"
          },
          {
            "emailAddressId": 3,
            "emailAddress": "henry@yahoo.com"
          }
        ],
        "phoneNumbers": [
          {
            "phoneNumberId": 1,
            "phoneNumber": "123-111-4567"
          },
          {
            "phoneNumberId": 2,
            "phoneNumber": "123-222-4567"
          }
        ],
        "address": {
          "addressId": 1,
          "street": "1515 Redwood St",
          "city": "Bridgetown",
          "state": "NJ",
          "zip": "55678"
        }
      }
    ]
  }
};

const outputFile = './apidoc/swagger_output.json';
const endpointsFiles = ['./src/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);