// function allCountries(){
//     fetch('https://restcountries.com/v2/all')
//     .then(res=>res.json())
//     .then(data=>countries(data))

// }
// allCountries()
// function countries(countries){
//     for(let country of countries){
      
//        var newDiv=document.createElement('div');
//        newDiv.classList.add('col')
//        newDiv.innerHTML=` <div class="card " style="height: 280px;" onclick="clickFunction('${country.flags.png}','${country.name}','${country.capital}')">
//        <img src="${country.flags.png}" class="card-img-top" alt="..." style="height:173px;">
//        <div class="card-body">
//          <h5 class="card-title text-black">${country.name} </h5>
//          <p class="card-text text-black">${country.capital}</p>
//        </div>
//      </div>`
//      document.getElementById('display').appendChild(newDiv)

//     }

// }

// function clickFunction(flag,countrName,countryCapital){


//   var newDiv=document.getElementById('singleDisplay')

//   newDiv.innerHTML=` <div class="card " >
//   <img src="${flag}" class="card-img-top" alt="..." >
//   <div class="card-body">
//     <h5 class="card-title text-black">${countrName} </h5>
//     <p class="card-text text-black">${countryCapital}</p>
//   </div>
// </div>`


// }






//europ button europe()

// function europe(){
//     fetch('https://restcountries.com/v2/continent/europe')
//     .then(res=>res.json())
//     .then(data=>console.log(data[0]))

// }
// // function eorupCountries(countries){
// //     document.getElementById('display').innerHTML='';
// //     for(let country of countries){
// //         console.log(country)
// //        var newDiv=document.createElement('div');
// //        newDiv.classList.add('col')
// //        newDiv.innerHTML=` <div class="card " style="height: 280px;">
// //        <img src="${country.flags.png}" class="card-img-top" alt="..." style="height:173px;">
// //        <div class="card-body">
// //          <h5 class="card-title text-black">${country.name} </h5>
// //          <p class="card-text text-black">${country.capital}</p>
// //        </div>
// //      </div>`
// //      document.getElementById('display').appendChild(newDiv)

// //     }

// // }




// function allCountries(){
//   document.getElementById('singleDisplay').innerHTML=''
//   document.getElementById('display').innerHTML=''
//   document.getElementById('error').innerHTML=` <div style="height:400px;" class="d-flex justify-content-center align-items-center  vw-100  position-fixed" >
//   <div class="spinner-border text-primary " role="status" id="spinner">
//   </div>
// `;

//   var inputValue=document.getElementById('input')
//   var inputValueMain=inputValue.value;

//   console.log( inputValueMain)
//     document.getElementById('spinner').style.display='block'

//     // if(inputValue.value==''){

//     //   document.getElementById('error').innerHTML=`pls enter some name`
//     // }
   
//      var url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValueMain}`
   
//      fetch(url)
//      .then(res=>res.json())
//      //api kaj korar age porjonto uporer ongshe ..api call korle icher ongshe kaj kora shuru kore
//      .then(data=>{
//        countries(data.drinks)
//        document.getElementById('error').innerHTML=''
//      })

    
  







  // else{
    // console.log( inputValueMain)
    // document.getElementById('spinner').style.display='block'
    //  var url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValueMain}`
   
    //  fetch(url)
    //  .then(res=>res.json())
    //  //api kaj korar age porjonto uporer ongshe ..api call korle icher ongshe kaj kora shuru kore
    //  .then(data=>{
    //    countries(data.drinks)
    //    document.getElementById('error').innerHTML=''
    //  })
   
  // }









//  console.log( inputValueMain)
//  document.getElementById('spinner').style.display='block'
//   var url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValueMain}`

//   fetch(url)
//   .then(res=>res.json())
//   //api kaj korar age porjonto uporer ongshe ..api call korle icher ongshe kaj kora shuru kore
//   .then(data=>{
//     countries(data.drinks)
//     document.getElementById('error').innerHTML=''
//   })

function allCountries(){
       document.getElementById('singleDisplay').innerHTML=''
       document.getElementById('display').innerHTML=''
       document.getElementById('error').innerHTML=` <div style="height:400px;" class="d-flex justify-content-center align-items-center  vw-100  position-fixed" >
      <div class="spinner-border text-primary " role="status" id="spinner">
       </div>
      `;

  var inputValue=document.getElementById('input')
  var inputValueMain=inputValue.value;

  console.log( inputValueMain)
    document.getElementById('spinner').style.display='block'

    // if(inputValue.value==''){

    //   document.getElementById('error').innerHTML=`pls enter some name`
    // }
   
     var url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValueMain}`
   
     fetch(url)
     .then(res=>res.json())
     //api kaj korar age porjonto uporer ongshe ..api call korle icher ongshe kaj kora shuru kore
     .then(data=>{
       countries(data.drinks)
       document.getElementById('error').innerHTML=''
     })

    
}

allCountries()
function countries(foods){
  // !countries ar country==null same kotha.
  // amra  chaile niche !country er jaigai country==null babohar korte parbo
if(!foods){
  document.getElementById('error').innerHTML=`<div style="height:400px;" class="d-flex justify-content-center align-items-center  vw-100  position-fixed" >
  kono kichu pawa jai ni
  </div>`
  console.log('kono kichu pawa jai ni')
}
  console.log(foods)
  for(let food of foods){
    console.log(food)
    var newDiv=document.createElement('div');
           newDiv.classList.add('col')
           newDiv.innerHTML=` <div class="card " style="height: 280px;"  onclick="clickFunction('${food.strDrinkThumb}','${food.strDrink}')">
           <img src="${food.strDrinkThumb}" class="card-img-top" alt="..." style="height:173px;">
           <div class="card-body">
             <h5 class="card-title text-black">${food.strDrink} </h5>
        
           </div>
         </div>`
         document.getElementById('display').appendChild(newDiv)
    
  
  
  }}


function clickFunction(source,name){


document.getElementById('singleDisplay').innerHTML=`<div class="card mb-3 w-50 " >
<div class="row g-0 " style="height: 100%; width: 100%;">
  <div class="col-md-6">
    <img src="${source}" class="img-fluid rounded-start" alt="..." style="height: 100%; width: 100%;">
  </div>
  <div class="col-md-6">
    <div class="card-body">
      <h5 class="card-title text-black">${name}</h5>
      <p class="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text text-black"><small class="text-muted"></small></p>
    </div>
  </div>
</div>
</div>`



}




  //  kono akta properties na theka dekhabona thakle dekhabo amon sorto hocche 
        //  akdom niche ami udahoron die dieyechi
   // nicher kotahatar ortho hocche meal.strnnn thakle dekhabe na thakle dekhabena
          // supposse paragraph tag er vetor a <p> ${meal.strnnn ? meal.strnnn:''} </p>