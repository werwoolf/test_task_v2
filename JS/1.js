function deepEqual (x,y){
if(x===y){
    return true
}else{
    if(Object.keys(x).length != Object.keys(y).length){ 
        return false;
    }
    for(var propName in x){
        if (! y.hasOwnProperty(propName)) { 
            return false;
        }
        if(x[propName].valueOf() !== y[propName].valueOf()){  
            if(! deepEqual(x[propName], y[propName]) ){ е
                return false;
            }
       }
    }
} 
return true;
}

console.log(deepEqual({name: 'test'}, {name: 'test'})) 
