/**
 * @profile: prompt.js
 * @module prompt
 * @description a small prompt to get input from the user. 
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Svyatoslav Oleg Russkiy
 * @date 2023/06/09
 * @copyright Copyright @ 2023-06-09 by Svyatoslav Oleg Russkiy all rights reserved.
*/

let fs = require('fs');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `prompt.${baseFileName}.`;
let term = 13; // carriage return

// prompt signature
/**
 * @function prompt
 * @param {*} ask
 * @param {string} ask What the prompt should display when asking the user for input.
 * @returns {string} returns a string of what the user inputs.
 * @author Svyatoslav Oleg Russkiy
 * @date 2023/06/09 
*/

function prompt(ask) {
    let functionName = prompt.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`ask is: ${JSON.stringify(ask)}`);
    let input = '';
    if (ask) {
        process.stdout.write(ask);
    }
    let 
        buffer = Buffer.alloc(1024),
        fd = process.platform === 'win32' ? process.stdin.fd : fs.openSync('/dev/tty', 'rs'),
        readSize = fs.readSync(0, buffer, 0, 1024);

    input = buffer.toString('utf8', 0, readSize);
    if (input.includes(String.fromCharCode(term))) {
        input = input.slice(0, input.indexOf(String.fromCharCode(term)));
    } else if (input.includes('/r/n')) {
        input = input.slice(0, input.indexOf('/r/n'));
    }
    console.log(` input is: ${JSON.stringify(input)}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return input;
}
module.exports = {
['prompt']: (ask) => prompt(ask)
};

// export default {
//     prompt
// }

