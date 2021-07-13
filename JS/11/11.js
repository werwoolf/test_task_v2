let btnIns = document.getElementById('btnInsert')     //получаем кнопку вставки
let btnRem = document.getElementById('btnRemove')     //получаем кнопку удаления
let table = document.getElementById('sampleTable')    // получение таблицы
let tbody = table.childNodes[1]                       // тело таблицы
let amountRow = tbody.childNodes[0].children.length   // количество столбцов

btnIns.onclick=function(){                              // вставка
  let amountCol = tbody.children.length   // количество столбцов
  let newRow = document.createElement("tr")             // новая строка
  for (i=0; i<amountRow; i++){                          //  вставка нужного количества ячеек
    let newColum = document.createElement("td")         // новая ячейка
    newColum.innerHTML= `Row${amountCol+1} cell${i+1}`                 // текст яцейки
    newRow.appendChild(newColum)                        // добавить  ячейку в строку
  }
  tbody.insertAdjacentElement('beforeend',newRow);      //вставка строки  
  console.log(amountCol)
}

btnRem.onclick= function(){// удаление
  tbody.lastChild.remove()

  console.log('delete')
}











