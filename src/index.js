import express from 'express';
import bodyParser from 'body-parser';
import { handleUSSD } from './ussd.js';

const app = express();
const port = 4000;

// Parse JSON request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle the USSD endpoint
app.post('/ussd', handleUSSD);

// Start the server
app.listen(port, () => {
  console.log(`USSD server running on port ${port}`);
});
