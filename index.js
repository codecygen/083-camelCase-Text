const setCamelCase = text => {

    if (text.trim().length <= 1) {
        return text;
    }

    const textArray = text.split(/[\s-_]+/);

    const capitalizedTextArray = textArray.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    const camelCaseText = capitalizedTextArray.join('').charAt(0).toLowerCase() 
        + capitalizedTextArray.join('').slice(1)
    ;

    return camelCaseText;
};

const text = '-the_steAlth_waR-Between                  cOuntries';

console.log(setCamelCase(text));
// theStealthWarBetweenCountries