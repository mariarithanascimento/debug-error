//Crie uma função que recebe um array e um número

function validaArray(array,num){

try{

    //Se não existir um array e se não existir um numero lance um erro do tipo  ReferenceError
    if(!array && !num) throw new ReferenceError("Envie os parametros");

    //Se o array não for do tipo 'object', lance um erro do tipo `TypeError`
    if(typeof array !== 'object') throw new TypeError("Array precisa ser do tipo object");

    //Se o número não for do tipo 'number', lance um erro do tipo `TypeError`
    if(typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number");

    /*Se o tamanho do array for diferente do número enviado como parâmetro, 
    lance um erro do tipo `RangeError`*/
    if(array.length !== num) throw new RangeError("Tamanho é invalido!");
 
    return array;
}

catch(e){

    //se o erro é uma instancia do ReferenceError
    if(e instanceof ReferenceError) {
        console.log("Este erro é ReferenceError");
        console.log(e.message);
    } else if(e instanceof TypeError) {
        console.log("Este erro é TypeError");
        console.log(e.message);
    } else if(e instanceof RangeError) {
        console.log("Este erro é RangeError");
        console.log(e.message);
    } else{
        console.log("Este tipo de erro não é esperado" + e);
    }
  }   
}

console.log(validaArray([1,2,3,4,5], 5));