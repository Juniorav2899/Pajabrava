function getnumbers() {
    let num1 = parseFloat(prompt("Introduce el primer numero: "));
    let num2 = parseFloat(prompt("Introduce el segundo numero: "));
    return [num1, num2];
}

function suma() {
    let [num1, num2] = getnumbers();
    alert(`El resultado de la suma es: ${num1 + num2}`);
}

function Resta() {
    let [num1, num2] = getnumbers();
    alert(`El resultado de la resta es: ${num1 - num2}`);
}

function Multiplicacion() {
    let [num1, num2] = getnumbers();
    alert(`El resultado de la multiplicacion es: ${num1 * num2}`);
}

function Division() {
    let[num1 ,num2] = getnumbers();
    if (num2 !==0) {
        alert(`El resultado de la division es: ${num1 / num2}`);
    } else {
        alert("No se puede dividir por cero.");
    }
}


