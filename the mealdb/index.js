
function myFunction(){
    var inputField=document.getElementById('inputFeild');
    var inputFieldValue=inputField.value;
    var url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFieldValue}`
    fetch(url)
    .then(response => response.json())
    .then(data => mealFunction(data.meals))
    inputField.value="";

}
//function ke onek jaiga theke cakk dwa jai
myFunction()

function mealFunction(meals){
    console.log(meals)
    document.querySelector('.main').innerHTML="";


    // console.log(meals)
       console.log(meals)
    if( meals==null){
    
        // document.getElementById("error").innerText="Nothing found try again!!!"
        
        document.getElementById("error").style.display="none"
        console.log('kono kichu pawa jaini')
    

    }
 

    for(let meal of meals){

    
        var newDiv=document.createElement('div')
        newDiv.classList.add('col')
        //single bolen ar double bolen value pathanor system prai same ta nicher onlick a dekahno holo jotogula value pathabo totogulake single cotetion er vetore dukhete hobe
        newDiv.innerHTML=`<div class="card mx-5 mx-lg-0 " onclick="bigPic('${meal.idMeal}','${meal.strMealThumb}')" >
        <img src="${meal.strMealThumb}" class="card-img-top"  class=""img-fluid>
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">
          ${meal.strInstructions.slice(0,50)}
          </p>
          <a href="${meal.strYoutube}" class="btn btn-primary bg-dark text-white">Go somewhere</a>
        </div>`
    
       document.querySelector('.main').appendChild( newDiv)
    }
//   }
}





// id die food ber kora
function bigPic(id,src){
 console.log(id)
 console.log(src)
     var url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
     fetch(url)
    .then(response => response.json())
    .then(data =>  photoShow(data.meals[0]))

}

function photoShow(source){

    document.querySelector('.bigpic').innerHTML="";
    var newDiv2=document.createElement('div')
    newDiv2.innerHTML=` <img src="${source.strMealThumb}" class="card-img-top d-block mx-auto" alt="..." class="img-fluid w-100" style="width: 300px;height: 300px;">`
    document.querySelector('.bigpic').appendChild(newDiv2)

}















// // ata sobcheye sohoj niom
// function bigPic(id){


//     document.querySelector('.bigpic').innerHTML="";
//         var newDiv2=document.createElement('div')
//         newDiv2.innerHTML=` <img src="${id}" class="card-img-top d-block mx-auto" alt="..." class="img-fluid w-100" style="width: 300px;height: 300px;">`
//         document.querySelector('.bigpic').appendChild(newDiv2)


// }
function myFunction3(){


    document.getElementById("error").style.display= 'none'
}
// document.getElementById("error").style.display= "none"