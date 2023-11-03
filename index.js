document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // предотвращаем переход по ссылке

    var form = event.target;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {

    };
    xhr.send(new FormData(form));

});
// Получить ссылку на кнопку
var button = document.getElementById("myButton");

// Добавить обработчик события для нажатия на кнопку
button.addEventListener("click", function () {
    // Открыть новую страницу
    window.open("thank.html", "_blank");
});    

document.getElementById("openModal").onclick = function () {
    document.getElementById("myModal").style.display = "block";
}

document.getElementById("closeModal").onclick = function () {
    document.getElementById("myModal").style.display = "none";
}

// Закрыть модальное окно при клике вне окна
window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showWord() {
    document.getElementById("output").innerHTML = "11750";
} function showWord2() {
    document.getElementById("output").innerHTML = "32000";
}
function showWord3() {
    document.getElementById("output").innerHTML = "32000";
}
function showWord4() {
    document.getElementById("output").innerHTML = "48000";
} 
                                
                                
