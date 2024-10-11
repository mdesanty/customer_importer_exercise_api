const express = require('express');

const app = express();
app.use(express.static('public'));

const customerRoutes = require('./routes/customerRoutes');
app.use('/customers', customerRoutes);

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../apidoc/swagger_output.json');
const swaggerOptions = {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'Customer Information API',
  customfavIcon: '/favicon.ico'
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

app.listen(process.env.PORT || 3002, () => {
  console.log('Server listening...');
});