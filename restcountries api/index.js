
//   document.getElementById('extraid').style.display="none"
function myButton(){
     
    document.getElementById('extraid').style.display="block"
    document.getElementById("spinner").style.display="block"

    var inputfield=document.getElementById('input-feild');
    var inputfieldValue=inputfield.value;
    // console.log(inputfieldValue)
    if(inputfield.value==""){
        console.log("pls enter somtethiong")
    }
    else{
        var url=`https://restcountries.com/v3.1/name/${inputfieldValue}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            
              document.getElementById("spinner").style.display="none"
              showPicture(data)
             

       document.getElementById('extraid').style.paddingTop="0px"
            // document.getElementById("spinner").style.display="none"
        } )
        // .catch(error=>console.log("somethimg went rong"))
        
    
    }
  
}

function commoFunction(){

    
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(datas=>{allPicture(datas)

    document.getElementById("spinner").style.display="none"
}

    )

}

 commoFunction()

function allPicture(datas){

    for( array of datas){
   


        console.log(array)
    var newDiv1=document.createElement('div');
    newDiv1.classList.add('col')
    newDiv1.innerHTML=`<div class="card" >
     <img src="${array.flags.png}" class="card-img-top" alt="...">
     <div class="card-body">
      <p class="card-text text-center">${array.name.common}</p>
     </div>
     </div>`



    document.querySelector('.all-country').appendChild(newDiv1);
    }
   



}


// myButton()

function showPicture(data){
    console.log(data.length)
    document.querySelector('p').innerHTML='';
    // document.querySelector('.all-country').innerHTML=''
    document.querySelector('p').innerHTML="";
    var newDiv=document.createElement('div');
    newDiv.innerHTML=`<img src="${data[0].flags.png}" alt="" style="width: 300px;height: 300px;">
    <p class="card-text text-center">${data[0].name.common}</p>`
    document.querySelector('p').appendChild(newDiv);

    

}




    // window.addEventListener("unload",function(event){



    //     document.querySelector('.spinner').style.backgroundColor="black"
     
    //      console.log("unload")
         
         
         
         
         
         
    //      })



    // function displayFunction(){

    // 
    // }
 

    // window.addEventListener("load",function(){

    //     document.getElementById("spinner").style.display="none"

    // })