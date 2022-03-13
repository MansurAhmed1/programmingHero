



// function myFunction(){
//     var freinds=['mansur1.jpg','robin.jpg','fb2.jpg','fb3.jpg']


// for(let freind of freinds){

//     var input=document.querySelector('.inputfeild')
//     console.log(input.value)

//     if(input.value=="mansur"){

//         var newDiv=document.createElement('div')

//         newDiv.innerHTML=`<img src="${freind}" alt="" style="width: 200px;height: 200px;" onclick="picFunction(this.src)">`
        
//         document.querySelector('.grid').appendChild(newDiv)
        
//     }
  
   
// }
    

// }

// function picFunction(source){

//     document.querySelector('.font').innerHTML=""
//     var font=document.createElement('div')

//     font.innerHTML=`<img src="${source}" alt="" style="width: 300px;height: 300px;" >`
//     document.querySelector('.font').appendChild(font);

// }
var freinds=['mansur1.jpg','robin.jpg','fb2.jpg','fb3.jpg']

// // }
// var count=-1
// setInterval(timeOutFunction(),2000)
// setInterval(() => {
   

// count++
// document.querySelector('.mySection').innerHTML=`<img src="${freinds[count]}" alt="" style="height: 300px; width: 300px;">`


// }, 10000);
var count=-1

setInterval(function(){
    // count>=freinds.length
   
    count++
    if( !freinds[count]){
       console.log('abbbb')
        count=0
        // console.log(freinds.length)
        // document.querySelector('.mySection').innerHTML=`<img src="${freinds[count]}" alt="" style="height: 300px; width: 300px;">`
    }

        
        document.querySelector('.mySection').innerHTML=`<img src="${freinds[count]}" alt="" style="height: 300px; width: 300px;">`

  
},2000)