


function buyButton(){

    var productName=document.getElementById('productName').value;;
    var productPrice=document.getElementById('productPrice').value;

    makeList(productName,productPrice);

   
    document.getElementById('productPrice').value='';
    document.getElementById('productName').value='';
    // price(productPrice)
}


//  function keyList(key){
// console.log(key)
// return key

//  }
function makeList(productName,productPrice){
  

    setupStorage(productName,productPrice)
    var newDiv=document.createElement('li')
    newDiv.innerHTML=`${productName} :${productPrice} TK `
    document.querySelector('ul').appendChild(newDiv)

}


//take localStorage
function takeLocalStorage(){

var list=localStorage.getItem("cart")


let listObject;
if(!list){
    listObject={};
}
else{
    listObject=JSON.parse(list)
 
}
return listObject

}

//setup storage

function  setupStorage(name,price){

    var list= takeLocalStorage()
    if( !list[name]){
        list[name]=price;
       }
       else{
        list[name]=parseFloat(list[name])+parseFloat(price);
       }
    // list[name]=price;
    // parseFloat(list[name])+parseFloat(price)
    var listToStringify=JSON.stringify( list)
    console.log(list)
    localStorage.setItem('cart',listToStringify)
   
}

//setup name to storage

function setupName(object){

var values=Object.values(object);

var keys=Object.keys(object);
for(let key of keys){
    // console.log(object[key])
 cakeList(key,object[key])
}


}
setupName(takeLocalStorage())

function cakeList(productName,productPrice){
  
    var newDiv=document.createElement('li')
    newDiv.innerHTML=`${productName} :${productPrice} TK `
    document.querySelector('.ul').appendChild(newDiv)

}