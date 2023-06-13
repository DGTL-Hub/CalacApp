/**
 * @file index.js
 * @module index
 * @description A small command line calc application.
 * @requires myMath
 * @requires prompt
 * @requires {@link hhtps://www.npmjs.com/package/path|path}
 * @author Svyatoslav Oleg Russkiy
 * @date 2023/06/09
 * @copyright Copyright @ 2023-06-09 by Svyatoslav Oleg Russkiy all rights reserved.
 */

// Internal imports
let myMath = require('./myMath');
let prompt = require('./prompt');
// External imports
let path = require('path');
global.appRoot = path.resolve(process.cwd());
let rootPath = '';
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `application.${baseFileName}.`;

/**
 * @function application
 * @description The main program loop, the init for the entire application.
 * @requires module:prompt
 * @author Svyatoslav Oleg Russkiy
 * @date 2023/06/09
 */
function application() {
    let functionName = application.name;
    let argumentDriveInterface = false;
    let commandInput, commandResult;
    // let inputDataUser1 = 0;
    // let inputDataUser2 = 0;
    
    let inputDataValue1 = 0;
    let inputDataValue2 = 0;
    // let validInputString = false;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`BEGIN main program loop`);
    console.log(`BEGIN command parser`);
    if (argumentDriveInterface === false) {
        while (programRunning) {
            commandInput = prompt.prompt(`Enter a math operation: `);

            if (commandInput) {
                if (commandInput.toUpperCase().trim() === 'EXIT' ||
                    commandInput.toUpperCase().trim() === 'QUIT' ||
                    commandInput.toUpperCase().trim() === 'Q' ||
                    commandInput.toUpperCase().trim() === 'X') {
                    console.log(`END command parser`);
                    programRunning = false;
                    console.log(`END main program loop`);
                    console.log("Exiting program.");
                } else if (commandInput.toUpperCase().trim() === 'ADD') {
                    // inputDataUser1 = "";
                    // inputDataUser2 = "";
                    // while (!validInputString) {
                    //     inputDataUser1 = prompt.prompt(`Enter first number: `);
                    //     if (!isNaN(parseInt(inputDataUser1))) {
                    //         validInputString = true;
                    //         inputDataValue1 = parseInt(inputDataUser1);
                    //     }
                    // }
                    
                    inputDataValue1 = 0;
                    inputDataValue2 = 0;
                    inputDataValue1 = getUserInput(`Enter second number to add: `);
                    // validInputString = false;
                    
                    inputDataValue2 = getUserInput(`Enter second number: `);
                    let addResult = myMath.add(inputDataValue1, inputDataValue2);
                    console.log(`The result of adding ${inputDataValue1} and ${inputDataValue2} is: ${addResult}`);
                }
            }
        }
    }
    console.log(`END ${namespacePrefix}${functionName} function`);
}
/**
 * @function getUserInput
 * @description gets user input from the user and validates that it is an int.
 * @param {string} message the message to query the user for input.
 * @returns {integer} An Int value from the user input. 
 * @author  Svyatoslav Oleg Russkiy
 * @date 2023/06/09
 */
function getUserInput(message) {
    let functionName = getUserInput.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`message is: ${message}`);
    let returnData = 0;
    let inputData;
    let validInputString = false;
    while (!validInputString) {
        inputData = prompt.prompt(message);
        if (!isNaN(parseInt(inputData))) {
            validInputString = true;
            returnData = parseInt(inputData);
        }
    }
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
}



// excuse
let programRunning = false;
programRunning = true;
application();
