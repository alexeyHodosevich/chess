//Проверка на Github
//Еще один коммент для проверки

//Comment to check conflict
function Board(selector) {

    //Создаем шахматную доску (с картинками)
    for (var row = 0; row < 8; row++) {
    var br = document.createElement('br');

    if (row==0) {
        for (var pos = 0; pos < 9; pos++) {
            var div = document.createElement('div'); 
            var arr = ['','A','B','C','D','E','F','G','H'];

            div.className = "empty";
            div.innerText = arr[pos];
            document.body.appendChild(div);
        }
        var br1 = document.createElement('br');
        document.body.appendChild(br1);
    }
    
    var array = [8,7,6,5,4,3,2,1];   
    var div = document.createElement('div');
    div.className = "empty";
    div.innerText = array[row];
    document.body.appendChild(div); 

    for (var cell = 0; cell < 8; cell++) {
       var div = document.createElement('div');

        var color = (row+cell) % 2 == 0 ? "exist black " : "exist white ";
        if (row==0) {
            div.className = (cell==0 || cell==7)?(color+"bl"):(cell==1 || cell==6)?(color+"bg"):(cell==2 || cell==5)?(color+"bs"):(cell==3)?(color+"bf"):(color+"bk");
        } else if (row==7) {
            div.className = (cell==0 || cell==7)?(color+"wl"):(cell==1 || cell==6)?(color+"wg"):(cell==2 || cell==5)?(color+"ws"):(cell==3)?(color+"wf"):(color+"wk");
        } else if (row==1) {
            div.className = (color+"bp");
        } else if (row==6) {
            div.className = (color+"wp");
        } else {
            div.className = (color);
        }
        document.body.appendChild(div);
    }
    document.body.appendChild(br);
    }

    //В переменную записываем все div'ы, которые являются именно клетками шахматной доски
    var div2 = document.getElementsByClassName("exist");

    //Создаем div для указания текущей позиции
    var pos = document.createElement('div');
        pos.className = "count";

    //Создаем массив, в котором находятся все адреса ячеек (A8, B8, C8 ...)
    var place = [];

    for (var i = 0; i < 8; i++) {
        for (var k = 1; k <= arr.length-1; k++) {
            place.push(arr[k]+array[i]);
        }
    }

    //Функция, которая при щелчке на клетку поля убирает выделение с предыдущей и ставит на эту, передавая свой адрес
    this.put = function() {
        for (var k = 0; k < div2.length; k++) {
            div2[k].classList.remove("chosen");
        }
        this.classList.add("chosen");
        
        pos.innerText = "Текущая позиция: "+this.innerHTML;
    }

    //Перебираем массив клеток поля ставя события и записывая в нее текст со своим адресом
    for (var i = 0; i < div2.length; i++) {

        div2[i].innerText = place[i];
        div2[i].addEventListener("click", this.put);

    }

    document.body.appendChild(pos);
}

var chessGame = new Board( document.body );
