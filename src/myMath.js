/**
 * @file myMath.js
 * @module myMath
 * @description A small command line calc application.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Svyatoslav Oleg Russkiy
 * @date 2023/06/13
 * @copyright Copyright @ 2023-06-09 by Svyatoslav Oleg Russkiy all rights reserved.
 */

//Internal imports 

//External imports
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `application.${baseFileName}.`;

/**
 * @function add
 * @description adds two numbers together and return value.
 * @param {integer} data1 first number to add.
 * @param {integer} data2 the second number to add.
 * @returns {integer} returns the sum of the two numbers.
 * @author Svyatoslav Oleg Russkiy
 * @date 2023/06/13
 */
function add(data1, data2) {
    let functionName = add.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`data1 is: ${JSON.stringify(data1)}`);
    console.log(`data2 is: ${JSON.stringify(data2)}`);
    let returnData = 0;
    if (data1 && data2) {
        returnData = data1 + data2;
    }
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
}
/**
 * @function subtract
 * @description subtracts two numbers together and return value.
 * @param {integer} data1 
 * @param {integer} data2
 * @returns {integer} returns the difference of the two numbers.
 * @author Svyatoslav Oleg Russkiy
 * @date 2023/06/13 
 */
function subtract(data1, data2) {
    let functionName = subtract.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`data1 is: ${JSON.stringify(data1)}`);
    console.log(`data2 is: ${JSON.stringify(data2)}`);
    let returnData = 0;
    if (data1 && data2) {
        returnData = data1 - data2;
    }
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
}
/**
 * @function multiply
 * @description multiplies two numbers together and return value.
 * @param {integer} data1 
 * @param {integer} data2 
 * @return {integer} returns the product of the two numbers.
 * @author Svyatoslav Oleg Russkiy
 * @date 2023/06/13
 */
function multiply(data1, data2) {
    let functionName = multiply.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`data1 is: ${JSON.stringify(data1)}`);
    console.log(`data2 is: ${JSON.stringify(data2)}`);
    let returnData = 0;
    if (data1 && data2) {
        returnData = data1 * data2;
    }
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
}
/**
 * @function divide 
 * @param {integer} data1 The first number to divide.
 * @param {integer} data2 The second number to divide.
 * @returns {integer} returns the quotient of the two numbers. 
 */
function divide(data1, data2) {
    let functionName = divide.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`data1 is: ${JSON.stringify(data1)}`);
    console.log(`data2 is: ${JSON.stringify(data2)}`);
    let returnData = 0;
    if (data1 && data2) {
        returnData = data1 / data2;
    }
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
}
/**
 * @function factorial
 * @description raises a number to a power.
 * @param {integer} data the number to factorialize.
 * @returns {integer} returns the factorial of the number.
 * @author Svyatoslav Oleg Russkiy
 * @date 2023/06/13
 */
function factorial(data) {
    let functionName = factorial.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`data is: ${JSON.stringify(data)}`);
    let returnData = 0;
    if (data === 0) {
        returnData = 1;
    } else {
        returnData = data * factorial(data - 1);
    }
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
}

module.exports = {
    ['add']: (data1, data2) => add(data1, data2),
    ['subtract']: (data1, data2) => subtract(data1, data2),
    ['multiply']: (data1, data2) => multiply(data1, data2),
    ['divide']: (data1, data2) => divide(data1, data2),
    ['factorial']: (data) => factorial(data)
}
