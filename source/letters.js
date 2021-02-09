'use strict';

/***
 * Count amount of one symbol in line
 * @param {string} s - line to find amount of symbol
 * @param {string} l - symbol to find
 * @returns {number}
 */
const countLetter = (s, l) => s.split(l).length - 1;

/***
 * Delete repeating symbols in line
 * @param {string} stroke - line
 * @param {boolean} leaveSymbol - true if leave first of repeating symbol, false - leave last, nothing - not leave any of repeating symbols
 * @returns {string}
 */
const letters = (stroke, leaveSymbol) => {
    for (let i = 0; i < stroke.length; i++) {
        const symbol = stroke[i];
        const amountOfLetter = countLetter(stroke, symbol);
        if (amountOfLetter > 1) {
            const place = leaveSymbol ? stroke.indexOf(symbol) : stroke.lastIndexOf(symbol) - amountOfLetter + 1;
            stroke = stroke.replaceAll(symbol, '');
            if (leaveSymbol !== undefined) {
                stroke = stroke.slice(0, place) + symbol + stroke.slice(place);
            }
        }
    }
    return stroke;
}
