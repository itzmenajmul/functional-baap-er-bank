// input field function
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
// text function
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const TextElementValueString = textElement.innerText;
    const textElementValue = parseFloat(TextElementValueString);
    return textElementValue;
}
// value set function
function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}