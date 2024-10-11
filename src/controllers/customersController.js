const fs = require('fs');
const moment = require('moment');

const index = (req, res) => {
  /*
    #swagger.tags = ['Customers']

    #swagger.description = 'Endpoint to get customers data.'

    #swagger.parameters['date'] = {
      in: 'query',
      description: 'The date to get customers data for. Valid values are the dates from yesterday to three days ago. Defaults to yesterday&#58;s date when not provided.',
      required: false,
      type: 'string',
      schema: '2024-10-13'
    }

    #swagger.responses[200] = {
      description: 'Customers data retrieved successfully.',
      schema: {
        $ref: '#/definitions/Customers'
      }
    }

    #swagger.responses[400] = {
      description: 'Invalid date. Please try again.'
    }

    #swagger.responses[500] = {
      description: 'An error occurred. Please try again later.'
    }
  */

  let timeframe = 'yesterday';

  if (req.query.date) {
    switch (req.query.date) {
      case yesterday():
        timeframe = 'yesterday';
        break;
      case twoDaysAgo():
        timeframe = 'twoDaysAgo';
        break;
      case threeDaysAgo():
        timeframe = 'threeDaysAgo';
        break;
      default:
        res.status(400).json({error: 'Invalid date. Please try again.'});
        return;
    }
  }

  try {
    const data = fs.readFileSync(`./data/customers/${timeframe}.json`, 'utf8');
    const customers = JSON.parse(data);
    res.json(customers);
  }
  catch (err) {
    res.status(500).json({error: 'An error occurred. Please try again later.'});
  }
}

const yesterday = () => {
  return moment().subtract(1, 'days').format('YYYY-MM-DD');
}

const twoDaysAgo = () => {
  return moment().subtract(2, 'days').format('YYYY-MM-DD');
}

const threeDaysAgo = () => {
  return moment().subtract(3, 'days').format('YYYY-MM-DD');
}

const customersController = {
  index
};
module.exports = customersController;