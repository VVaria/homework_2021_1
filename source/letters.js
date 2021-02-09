'use strict';

const countLetter = (s, l) => s.split(l).length - 1;

const letters = (stroke, leaveSymbol = -1) => {
    for (let i = 0; i < stroke.length; i++) {
        let symbol = stroke.charAt(i);
        let amountOfLetter = countLetter(stroke, symbol);
        if (amountOfLetter > 1) {
            let place = 0;
            leaveSymbol ? place = stroke.indexOf(symbol) : place = stroke.lastIndexOf(symbol) - amountOfLetter + 1;
            stroke = stroke.replaceAll(symbol, '');
            leaveSymbol !== -1 ? stroke = stroke.slice(0, place) + symbol + stroke.slice(place) : undefined;
        }
    }
    return stroke;
}
