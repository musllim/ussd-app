import dotenv from 'dotenv';
import UssdMenu from 'ussd-menu-builder';
import _ from 'lodash';
import sessionConfig from '../utils/sessionConfig.js';
import login from './login.js';
import signup from './signUp.js';

// Create a new instance of the UssdMenu
const menu = new UssdMenu();
menu.sessionConfig(sessionConfig)
// Register USSD menu states and handlers
menu.startState({
  run: () => {
    menu.con('Welcome to your USSD application.\n1. Create an account\n2. Sign in');
    },
       next: {
        '1': 'signup',
        '2': 'login' 
      },
    defaultNext: "invalidOption",
  });

  menu.state("invalidOption", {
    run: () => {
      menu.end(`Invalid option`);
    },
  });

 _.over([signup,login])(menu)

async function handleUSSD(req, res) {
  // Process the USSD request
    menu.run(req.body, ussdResult => {
    // Send the USSD response
    res.send(ussdResult);
  });
}

export { handleUSSD };
