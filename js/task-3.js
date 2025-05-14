//Оголоси функцію getElementWidth, яка очікує три параметри, значення
//  яких будуть задаватися під час її виклику: • content— перший параметр,
//  ширина контенту • padding — другий параметр, значення горизонтального 
// падінгу для кожної зі сторін • border — третій параметр, значення товщини 
// бордера для кожної зі сторін Значення всіх параметрів будуть рядками формату 
// Npx де N — це довільне число, ціле або дробове.

//Доповни код функції так, щоб вона повертала число —загальну ширину елемента.
// При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.

//Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
 //У консоль будуть виведені результати її роботи.


function getElementWidth(content, padding, border){
    const numContent = Number.parseFloat(content);
    const numPadding = Number.parseFloat(padding);
    const numBorder = Number.parseFloat(border);
    const width = numContent + numPadding * 2 + numBorder * 2;
    return width;

}


console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));

