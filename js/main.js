const textAreaValue = document.getElementById('characters');
const output = document.getElementById('output');
const btnCalculate = document.getElementById('btnCalculate');
const btnClear = document.getElementById('btnClear');

const calculate = () => {
	const text = textAreaValue.value.split('').length;
	output.innerHTML = text;
};

const clearArea = () => {
    textAreaValue.value = '';
    output.innerHTML = '0';
}

btnCalculate.addEventListener('click', calculate);
btnClear.addEventListener('click', clearArea)
