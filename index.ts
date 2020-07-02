import {getColors, getJsonColors, employee} from './colors';

console.log(getColors());
console.log(getJsonColors());
const str = JSON.stringify(getJsonColors());
console.log(`string reps is ${str} `);

const jsonObj = JSON.parse(str);
jsonObj['new'] = 'newColor';
Object.keys(jsonObj).forEach(item => {
    console.log(jsonObj[item]);
})

//employee = new employee()
//console.log(jsonObj);