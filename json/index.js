// json java script object nation

var students={
name:"anower",
roll:101,
class:"eight"
}
console.log(students)
//normal student namok object ke json file a convert korar jonno JSON.stringify(er moddho normall file er name likhte hobe)

//normall to json
var json=JSON.stringify(students);
//json korle ta ar object thakena..jemon 
//json.name die ami name dekhte parona object er mot0
console.log(json)

//json to normal
//json ke on=bject korle ta objectc hoe jai
//akta json file {"name":"anower","roll":101,"class":"eight"}
var jsonToNormall=JSON.parse(json);
console.log(jsonToNormall)
  //akhon ata object hoe geche jemon
  console.log(jsonToNormall.name)  





// server theke data nie kaj korar niom orthat get korar niom
// stringify theke json kore nite hoi



fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data =>  myFucntion(data))
  
  function myFucntion(parts){

console.log(parts.completed)

  }


  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(data=> myFunction(data))

  function myFunction(parts){

   


    for(let part of parts){
        var li=document.createElement("li")
        // li.setAttribute("start=x")
   
           li.innerHTML=`email: ${part.email} address:${part.address.street}`

           document.querySelector('ul').appendChild(li);
       
           console.log(part)

        }

  }

  
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response=>response.json())
  .then(data=> myFunction(data))

  function myFunction(parts){

   


    for(let part of parts){
        var li=document.createElement("li")
        // li.style.marginBottom="20px"
   
           li.innerHTML=part.title

           document.querySelector('ul').appendChild(li);
       
           console.log(part)

        }

  }



  // kenye rest api test
function myFunction(){

  fetch('https://api.kanye.rest/')
  .then(response=>response.json())
  .then(data=>divAdd(data.quote))

}


function divAdd(data){

    var paragraph=document.querySelector('p')
    var makeDiv=document.createElement('div')
    makeDiv.innerText=`${data}`
    paragraph.appendChild(makeDiv)

}


 

// the meldb .com api


function myFunction(){

  fetch('https://randomuser.me/api/')
  .then(response=>response.json())
  .then(data=>console.log(data))

}





// cookies
// document.cookie dara cookie jana jai cookie ke browser a ene kaj kora jai na