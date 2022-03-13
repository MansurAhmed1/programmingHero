function buyButton(){

    var productName=document.getElementById('productName').value;
    var productPrice=document.getElementById('productPrice').value;

    makeList(productName,productPrice)

}

function makeList(productName, productPrice){

    var newDiv=document.createElement('li')
    newDiv.innerHTML=`${productName} :${productPrice} TK `
    document.querySelector('ul').appendChild(newDiv)

}
//take localStorage

function takeLocalStorage(){

 localStorage.getItem('list')



}
takeLocalStorage()