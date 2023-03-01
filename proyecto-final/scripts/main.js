const miTitulo = document.querySelector('h1');
miTitulo.textContent = 'Agustín García';

function colorChanger() {
    var selectValue = document.getElementById("mySelection").value;
    document.getElementById("dummy").innerHTML = "You selected: " + selectValue;
    document.body.style.backgroundColor = selectValue;
}