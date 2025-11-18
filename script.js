function clearScreen() {
    document.getElementById("result").value = "";
}

function insert(value) {
    document.getElementById("result").value += value;
}

function deleteLast() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}

function calculate() {
    let result = document.getElementById("result").value;
    try {
        document.getElementById("result").value = eval(result);
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}