// // tar mane eksathe duitake valuke return kora jai na.
// function myFunction(x){
//     var number=x*x*x;
//     var numberOfmulifly=x*x;
//     return(number,numberOfmulifly)
// }
// console.log(myFunction(3))





// //primitive data type aktar mane change korle onnotar man change hobena
// var a ="hello";
// // b er jaigai a er man set kora set korle b er man a er maner soman hoe jabe
// var b=a;
// console.log(a,b)
// // eibar a er man change kore dilam tokhon ar b er man chnage hobena b er man ager a er man theke jabe
// var a="changed"
// console.log(a,b)











// //non primitive  a object er vetorer nam change korle e onnotar o vetorer man change hoe jai (object a non primitive hoi)
// //poro objrct change korle ar kaj korbena
// var x={name:"jamal"}
// var y=x;
// console.log(x.name ,y.name)
// //eibar ami x er man change kore dile y er mano chnage hoe jabe
//  x.name="hasib"
// console.log(x.name,y.name)
















// true false sonkhantro somossa
// x='something catch icceh motot dhoro ar true false return koro'
// jara jara true return kore
// true,positive number,negative number,all-string('string'),string er moddho white space(' '),empty aray(x=[];),empty object(x={})




//jara jara false return kore
// false,0,empty string(''),undefined,null,Nan
// var x eivabe lekha thakle undifined dekhabe orthat x er kono value na dewa
//var x=parseFloat("mansue")==NaN


//if x== true likhle jei kaj kaj kore shudu x likhle o same kaj more tai if(x==true er jaigai shudu x)likheo chole
// if(x==true){
//     console.log('yes this value is true')
// }
// else{
//     console.log('this value is false')
// };







// jara jara undefined dive


// // sysytem-1=value assigned na korle
// let x;
// console.log(x)


// // sysytem-2=function return na korle 
// function myFunction(x,y){

//     var sum=x+y;
// //akahne return kora hoi ni

// }
// console.log(myFunction(2))


// // sysytem-3=function return  korle but man na bosale
// function myFunction(x,y){

//     var sum=x+y;
//     return;
// //akahne return korse kitu man basano hoi ni

// }
// console.log(myFunction(2))


// // sysytem-4=function a pararmitre pass na kora hole
// function myFunction(x,y){

    
//     return y
// //akahne y er man pass kora hoi ni

// }
// console.log(myFunction(2))


// // sysytem-5=object er moddho prpparty na thakele tare consloe .log korle undefined dekhabe 

// var student={name:"Mansur Ahmed",roll:101}
// //obje t a class property nai kintu niche class ke conslo korhi ta undefined dekhaisi
// console.log(student.class) 


// // sysytem-6=array er moddho prpparty index na thakle na thakele tare consloe .log korle undefined dekhabe 

// var student=['Mansur','Mamun']
// //array a index number 3  nai kintu niche class ke conslo korhi ta undefined dekhaisi
// console.log(student[3]) 







// dbl ==equal or ===tripple equal er babohar
//dbl equal chack kore duita songkha soman kina 
// tripple equla chack korbe duita soman kina and akoi sathe data type check korbe
// const first='2';
// const secend=2;


// if(first===secend){
//     console.log("condition is true")

// }
// else{
//     console.log('consition is false')
// }




// // java script scop
//local scope
// // nicher udhahron=function er betor kono varibale toiri kora ta function er baire acces kora jai na toe function er vetore iccehmoto babohar kora jaiekek local space bole..return kore console kora jai er baire kichu kora jai na.



// function add(first,secend){

//     var sum=first+secend
//     return sum 

// }
// add(3,4)

// console.log(sum)

// // function loop and condition baire  er baire normal jekhon jaiga theke toiri kora variable jekhono jaigai iccehmoto baohar kora jai
// //ake global varriable bole
// var globaVaribale="I am a global variable"
// console.log(globaVaribale)
// function myFunction(x){

// // console.log( globaVaribale)
// console.log(x)
// }
// myFunction(3)




// //block scopebohar
// //if else loop or arrow function er khetre loop condition er vetore const/let die kichu tori kra take er baire use kora jai na
// // eke block scope bole 
// // tobe var die toiri korle baohar kora jai
// function blockScope(x){




// if(x>10){
// const mood="mood"
// console.log(mood)
// }
// console.log(mood)
// }



// // blockScope(11)
// var names=['mansur','mamun']
// for(var nam of names){
// //ekhetre var die for of nile loop vaire print kora jabe tobe shudu matro shes ta print hobe
// //let const die nile loop baire print kora jabe
//    var test="hasan"
// //    upore test varibale loop er vetore let/const toiri kora tai ar jekhono jaigai use kora jabena
// //tobe var die toiri korle use kora jabe
// //    console.log(nam)
//    console.log(test)
// }
// // console.log(nam)
// console.log(test)






//global licking 
//kono akta varriable var let ba const chada toiri korle oitake jekhono jaigai use kor jai eita jenjaigai toiri hok na keno  temon kono somossa hoi na...at a
//seikh hasinar moto odhik khomotaban
//tai atake global licking bole









// //closer and incapsulation private varriable
// function stopWatch(){

//     let count=0;
// anonymus functio nichi
//     return function(){
//         count++
//         return count;
//     }

// }

// var clock1=stopWatch()
// // funtction er moddho function likhle call korar niom console.log(stopWatch()()) ,console.log( clock1())
// console.log( clock1())
// console.log( clock1())
// console.log( clock1())
// console.log( clock1())
// //ekhetre ami jotogula nutun variable yoiri kore function ke cll dibo oi notun toiri kora value tar flow te cholbe ager call kora ba toiri kora value er flow te thakbe ja udharon dekhle buja jai.
// // jake incapsulation bole
// var clock2=stopWatch();
// console.log( clock2());
// console.log( clock2());
// console.log( clock2());







// callback function er babohar

// function wellcomeMessage(goodMorning,name){
//  //paramiter hisebe function receive kore function ke call dilam
//     goodMorning(name)

// }



// //eta hocche paramiter hisebe amra sorasori arekta function ke call die dilam
// /*  wellcomeMessage(function goodMorning(){

//     console.log('good morning all')}
// )  */

// //arekta sohoj technic ache oita hocche prothome function ta likhe pore paramitre hisebe function er name ta likhe dewa.uporer niom ta sort hole besirvag khetre nicher niom ta use kora hoi

// function goodMorning(name){

//     console.log('good morning all',name)

// }

// wellcomeMessage(goodMorning,'Tohedul Mostafa Akib');




//frsehvabe callback function er babohar

function myFunction(goodMorning,name){
    goodMorning(name)
}

function goodMorning(name){
    console.log('good morning',name)
}

myFunction(goodMorning,'Tohedul Mostofa Akib')





//eivabe o kora jai
function myFunction(goodMorning){
    goodMorning;
}

function goodAfternoon(name){
    console.log('good afternnon',name);
}

function goodMorning(name){
    console.log('good morning',name);
}

myFunction(goodMorning('Tohedul Mostofa Akib'));
myFunction(goodAfternoon('Naheyan Sakib'));