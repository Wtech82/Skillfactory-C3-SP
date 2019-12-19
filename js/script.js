//функция загрузки в хранилище инпутов
function saveCookies() {
    var checkbox1 = document.getElementById('1');
    localStorage.setItem('1', checkbox1.checked);

    var checkbox2 = document.getElementById('2');
    localStorage.setItem('2', checkbox2.checked);

    var checkbox3 = document.getElementById('3');
    localStorage.setItem('3', checkbox3.checked);

    var checkbox4 = document.getElementById('4');
    localStorage.setItem('4', checkbox4.checked);

    var checkbox5 = document.getElementById('5');
    localStorage.setItem('5', checkbox5.checked);

    var checkbox6 = document.getElementById('6');
    localStorage.setItem('6', checkbox6.checked);
};

//функция загрузки из хранилища знаяений инпутов
function loadCookies(id){    
    var checked = JSON.parse(localStorage.getItem(id));
    document.getElementById(id).checked = checked;
};

//функция очистки хранилища
function delCookies() {
   	location.reload();
    localStorage.clear();
	}

//загрузка значений инпутов сразу после обновления страницы
	for (let i = 1; i < 7; i++) {
		id = i
		loadCookies(id);
}
	