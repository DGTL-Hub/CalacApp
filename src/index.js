/**
 * @file index.js@mod
 * @module index. 
 * @description A small command line calc application.
 * @requires {@link hhtps://www.npmjs.com/package/path|path}
 * @author Svyatoslav Oleg Russkiy
 * @date 2023/06/09
 * @copyright Copyright @ 2023-06-09 by Svyatoslav Oleg Russkiy all rights reserved.
 */

let path = require('path');
global.appRoot = path.resolve(process.cwd());
let rootPath = '';
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `application.${baseFileName}`;

/**
 * @function application
 * @description The main program loop, the init for the entire application.
 * @requires module:prompt
 * @author Svyatoslav Oleg Russkiy
 * @date 2023/06/09
 */


// Internal imports
let prompt = require('./prompt');
// External imports

function application() {
    let functionName = application.name;
    let argumentDriveInterface = false;
    let commandInput, commandResult;
    let inputData1 = 0;
    let inputData2 = 0;
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
                }
            }
        }
    }
    console.log(`END ${namespacePrefix}${functionName} function`);
}

// excuse
let programRunning = false;
programRunning = true;
application();