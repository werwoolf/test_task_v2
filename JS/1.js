function deepEqual (x,y){
if(x===y){
    return true
}else{
    if(Object.keys(x).length != Object.keys(y).length){ // Проверка на одинаковое количество свойств
        return false;
    }
    for(var propName in x){

        if (! y.hasOwnProperty(propName)) { // Есть ли свойства в обоих объектах
            return false;
        }
        if(x[propName].valueOf() !== y[propName].valueOf()){ // Одинаковы ли значения свойст 
            if(! deepEqual(x[propName], y[propName]) ){ // проверка объекта в объекте
                return false;
            }

       }
    }
} 
return true;
}



console.log(deepEqual({name: 'test'}, {name: 'test'})) 