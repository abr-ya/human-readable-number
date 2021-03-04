module.exports = function toReadable (number, rec = false) {
// const toReadable = (number, rec = false) => {
  if (number === 0) return !rec ? 'zero' : '';
  if (number < 10) return oneDigit(number);
  if (number < 20) return teens(number);
  if (number < 100) {
    const [sec, first] = String(number).split('');
    return `${deci(sec)}${first !== '0' ? ' ' : ''}${oneDigit(first)}`;
  }
  if (number <= 999) {
    const [third, sec, first] = String(number).split('');
    const tempNum = Number(sec + first);
    return `${oneDigit(third)} hundred${sec + first !== '00' ? ' ' : ''}${toReadable(tempNum, true)}`;
  }
  return 'toMuch';
}

const oneDigit = (num) => {
  const helper = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }
  return helper[num];
};

const teens = (num) => {
  const helper = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  }
  return helper[num];
};

const deci = (num) => {
  const helper = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  }
  return helper[num];
};

// console.log(toReadable(3));
// console.log(toReadable(15));
// console.log(toReadable(33));
// console.log(toReadable(50));
// console.log(toReadable(555));
// console.log(toReadable(800));