// var names=[1,2,3,4,5,6]
// for(number of names){

// var array=[]
// array.push(number*2)

// }
// console.log(array)

// var numbers=[1,2,3,4,56,7]
// numbers.map(function(x){console.log(x)}

// )

// import {names,  setText} from './export.js'
//  console.log(names);
// // ami function er vitore consloe .log korsi ejonno ekhane babhoar kora lage nai..
// setText("good by from es6")







// // class hocche onekta function er moto function a bair theke paramitre pathano lage dewa lage akhane just vetore constructer die paramitr pathabo er arki..call deawr system hocche just call dewar age akta new lagie divo.
// // arekta mojar baper hocche class die amra muloto object banai er aire ar kichu na.
// class Student{
// // constructer die muloto function er moto paramiter pathano hoi ...function e baire class a consturcter die vetore pathano hoi er baire ar kichuna.
// constructor(id,name){
// this.id=id;
// this.name=name;
// };

// // value ba function set korar niom akhaneo function er namer age function lekha lagbena
// // ekahne name paramitre dewa mane ager paramitre diche kintu constructer er vitero kintu name paramitre dewa ache tai akhane notun kore name paramtre set korai agerta kaj korbena.akhane notun kore set kora hoyeche



// set studentName (name){
// this.name=name
// }

// // get mane notun value set korar por o agerta pawa


// get studentInfo(){
// return this.id+''+this.name;

// }



// }



// let s1=new Student(101,"MansurAhmed")
// // console.log( s1)
// // s1 muloto akata objext hoe gese
//  console.log(s1.name)
// // set kora value notun more set kora niom korar  niom..ata object er moto..
// // object a amra names.id="102" die dile jemon id er value notun kore set hoe jai akhaneo same kotha
// s1.studentName="new name of Mansur"
// // set kora value console.log korar niom
// console.log(s1.name)

// // get mane agerta pawar joono jevabe call dite hobe
// console.log(s1.studentInfo)


// // homework

// function myFunction(array){
// // var sum=0;
//   let  result=(array[0]+2)*(array[1]+2)
//   return result
// }
// console.log( myFunction([1,2,3]))


// var array=[1,2,3,4,5,6,7,8,9,10];

// array.map(x=> {var newArray=[] ; newArray.push(x*5);console.log(newArray)})



// // function reduce korar niom
// class Common{
   
//     gosti="Jafforago Gusthi"
//     id=107;

//     constructor(name,address){
//         this.name=name
//         this.address=address
        
// }
// }

//       class support extends  Common {

//     // name;
//     // designation="support Web Dev";
//     // gosti="Jafforago Gusthi"
//     // id=107
//     designation="support Web Dev";
//     startSession(){
    
//         console.log(this.name, "start a support session")
//     }
//     constructor(name,address,time){
//         //super use korsi 
//         //this.name=name
//         //this.address=address ke common function er vetor dukhaisi bole super use korsi ata sohoj technic
//         super(name,address)
//         this.time=time


//     }
//     //jegulo sobar jonno soman segulo ke consructer er baire lekhbo 
//     //constucter er bairergula age print hobe
//     // constructor(name,address){
//     //     this.name=name
//     //     this.address=address
//     //     }
// }


// class teliJogaJog{

//     // name;
//     // designation="support Web Dev";
//     // gosti="Jafforago Gusthi"
//     // id=107
//     designation="support Coaching Center";
//    startCoaching(){
  
//         console.log(this.name, "start a coaching")
//     }

//     //jegulo sobar jonno soman segulo ke consructer er baire lekhbo 
//     //constucter er bairergula age print hobe
//     // constructor(name,address){
//     //     this.name=name
//     //     this.address=address
//     //     }
// }






// var support=new Support("Hasib","Dhaka",12)
// var mansur= new Support("mansur","noakhali")
// var hasib=new Support("mansur",'noakhali')
// // jehetu eita akta oject a porinoto hoise sehetu etake amra object er moto call die prttokta upadan nite parbo
// // console.log(mansur)
// // console.log(mansur. startSession())
// console.log(support)

// document.querySelector(".input-feild").addEventListener("keyup",function(e){

//    document.querySelector('.count').innerText=e.target.value.length

// })
