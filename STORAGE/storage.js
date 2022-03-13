//storage janar jono
//window.localStorage()
//window.sessionStorage()
//getItem babohar kore LocalStorage and sessionStorage theke nirdisto man pete ba return kora hoi.
//jemon window.localStorage.getItem ("def") pete hole evabe likhte hobe
// setItem dara man set kora hoi
//localStorage.setItem("def valueekhane likhbo",1000man ekhane likhbo)

//local storager er data sobsomoy sthai thake
//session storge er data refresh die chole jai







// //Storage Practice


//button click korle ei function kaj kore
function serchFunction(){
    var inputValue=document.getElementById('inputField').value;
    //transfer input value to function
    if(inputValue !==''){
        myFunction(inputValue)
        addProductToCart(inputValue)
    }
   else{
       console.log('empty value')
   }
    document.getElementById('inputField').value='';
}

//ja ja kinbo tata list kora
function myFunction(inputValue){

    var newdiv=document.createElement('div');
    newdiv.innerText=(inputValue);
    document.querySelector("p").appendChild(newdiv);

 }



    //storage theke card namok kichu ache kina check korbo  jodi thake tahole take normal korbo jodi na thake tahole empty object a transfer korbo
 const getCard=()=>{

     //storage theke get item die nilam
    const cart=localStorage.getItem('cart')
  
   
    let cartObject;
    //cart==null ba cart na thake (!cart) eivabe es6 er niome likhleo chole.
    //same vabe thakle (cart) shudu eivabe likhe dile chole
    if(!cart){
        cartObject={};
        return   cartObject
    }
    
    else{

        cartObject=JSON.parse(cart)
        return cartObject
    }

    // duitake eksathe return kore dewa jai
    // return cartObject



/* 
    //ei jinista ar uporer jinista same ami majh majhe confused hoe jai .ata ar uporer ta same ami eta nia akta vabte hobe
    var valueOfInputTags=parseFloat((valueOfInputTag.value));
 

    if( isNaN(valueOfInputTags)){
    valueOfInputTags=0
    };

    return valueOfInputTags;

*/



    }


 
    //ei function er kaj hocche ager object er vetor noutn key&value set kora
    //ekoi sathe key and value ke localstorage a joma kore rakha
    const addProductToCart=(name)=>{
        const cart=getCard();
console.log(cart)
       if( !cart[name]){
        cart[name]=1;
       }
       else{
        cart[name]= cart[name]+1;
       }
   
        // console.log(cart)
        var  cartStringfy=JSON.stringify(cart)
        localStorage.setItem('cart',cartStringfy)
    }





    //er kaj hocce object theke properties nie autovabe list toiri kora
    function objectToName(obj){
        for(let prop in obj){
            myFunction(prop)
        }
    }
    objectToName( getCard() )
    


    //order kora shes hole sob kichu delete kore dewar jonno ei function
    function placeorder(){

            document.querySelector("p").style.display="none"
            //  localStorage.removeItem() dara kono kichu remove kora hoi
            localStorage.removeItem('cart')
        }



     /*    var x=1;
       function myFunction(){

        if(typeof(x)=="number"){
            x=10;
            return x
        }
       return x
       }
       console.log(myFunction()) */