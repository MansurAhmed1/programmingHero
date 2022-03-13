function homeFunction(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=> homeSubFunction(data))

}
homeFunction();
// function homeSubFunction(array){

// for(let prop of array){
    

//     var newDiv=document.createElement('div');
//     newDiv.classList.add('col')
//     newDiv.innerHTML=` <div class="card " style="height: 280px;"  >
//     <img src="${prop.thumbnailUrl}" class="card-img-top" alt="..." style="height:280px;">

//   </div>`
//   document.getElementById('display').appendChild(newDiv) 

// }
// }


// //
// function homeFunction1(){
//     fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res=>res.json())
//     .then(data=>homeSubFunction1(data))

// }

// function homeSubFunction1(array){
// var count=0;
// for(let prop of array){
//     count++
// console.log(count)
//     var newDiv=document.createElement('div');
//     newDiv.classList.add('col')
//     newDiv.innerHTML=` <div class="card " style="height: 280px;" id='card' >
  
// <p> ​${prop.body}</p>
// <p><button onclick='deleteFunction(this.parentNode.parentNode.parentNode)'>  ${count} </button></p>
//   </div>`
//   document.getElementById('display1').appendChild(newDiv) 

// }
// }
//   // <img src="${prop.thumbnailUrl}" class="card-img-top" alt="..." style="height:280px;">
// function deleteFunction(node){
// // document.getElementById('.card').style.display="none"
// node.style.display="none"
// console.log(node)

// }
// // document.getElementById('mera-button').addEventListener("click",function(e){

// // // var delet=e.target.parentNode.parentNode.parentNode.style.display='none'
// // // console.log( delet)
// // var delet2=e.target.parentElement.parentElement.parentElement.style.display='none'
// // console.log(delet2)


// // })