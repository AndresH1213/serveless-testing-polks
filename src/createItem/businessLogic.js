const log = require('serverless-logger')(__filename);

const performCalculation = ({ a, b, method }) => {
  log(`Received method="${method}" and values: a=${a}; b=${b}`);
  switch (method) {
    case 'add':
      return a + b;
    // To Do - implement other methods
    default:
      throw new NotImplementedYetError();
  }
};

class NotImplementedYetError extends Error {
  constructor() {
    super();
    this.status = 400;
    this.statusCode = 400;
    this.name = 'NotImplementedYetError';
    this.message = 'Not implemented yet!';
  }
}

module.exports = { performCalculation };
