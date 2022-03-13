// koekti niome object make kora dekhano holo

// system1-
var student={name:"Mansur",roll:101}
console.log( student)


// system-2
var object=new Object();
console.log(object)

// system-3
//ekhetre cresate er 1st backet er vetor kono kichu likhe dite hobe chaile onno akta object o pass kora jete pare.ami uporer student namok toiri kora object take vetore dukaisi
var object=Object.create(student)
console.log(object.name)
// aro duita niom ache ta hocche class er maddhome oita to pari so na korle o somossa nai




//object.keys  
//object er keys dara amra object er proparties khuje pete sahajjo pai
//onekta array er index of er moto

var student={name:"mansur ahmed",roll:101,class:"six"}
var keys=Object.keys(student)
console.log(keys)



//object.values  
//object er values dara amra object er proparties value khuje pete sahajjo pai

var values=Object.values(student)
console.log( values)

//object.entries  
//object er entries  dara amra object er proparties and value aksathe khuje pete sahajjo pai
//two dimentional array dei
var entries=Object.entries(student)
console.log( entries)



// /delte dhara obejc/t er kono prperties ke delete kora jai
// Object.seal(student)
delete student.name
console.log(student)


// seal korle amra abar ager sei delete kora jinis khuje pabo.tobe delete jeihane korsi tar upore seal korte hobe tai apra upore seal korse upore dike takale bujhte arbene
// Object.seal(student)


//ei dui niome object ke call kora jai
var names={name:'mamun',roll:101,id:1}
// console.log( names.id)
// console.log(names['id'])

//for of loop die amra array theke upadan ber korsi 
//object theke properties newar jonno for in loop babohar kora jai

/* system1 */
// for(const proparties in names){
//     //propertires nilam
//     console.log( proparties)
//     //properties nie tar theke value nilam
//     console.log(names[proparties])
// }


/* sysytem2 */
// abar ei niome value ber kora jai
var values=Object.values(names)
for(let value of values){
    console.log( value)
}

/* system3 */
var keys=Object.keys(names)
for(let key of keys){
    console.log(names[key])
}

                                        







// 2ta object same kina ta dekhar niom

const first={a:1,b:2}
const second={a:1,b:2}



//system1
// const third=first;
// if(first==third){
//     console.log("they ar same")
// }
// else{
//     console.log('they are not same')
// }

/* system2 kokhon first and secend ke soman dekhaite hobe tokhon stringify kore nite hobe*/
// function myFunction(first,second){

// if(JSON.stringify(first)==JSON.stringify(second)){
//    console.log('they are same') 
// }
// }
// myFunction();

/* system3  */

// //problem
//     var first2={a:1,b:2}
//     var second2={b:2,a:1}
//     function checkValue(first2,second2){


    //   if(Object.keys(first2).length!==Object.keys(second2).length){
    //     return false 
    //   }
  
    //   for (const properties in first){
    //     if(first2[properties] !==second2[properties]){
    //       return false
    //     }
     
    //   }
    //     return true

    // }
    // console.log(checkValue(first2,second2))






//js blind

//     //java script bind ata o ekta class er moto er kaj ache bind kore ager object er vetor notun akta object dukhie dewa taile ager onject ar kaj korbena notun ta kaj korbe simkle and mojar  akta jinis
//     const Kibria={
//       id:101,
//       money:5000,
//       name:'RJ Kibria',
//       treatDay:function(expense){
//         //this money bolte jei money prperties hisebe set kora cahe sei cvalue kaj korbe
//         this.money=this.money-expense;
//         // return this.money
//         return this.money
//       }

//     }
// // new object toiri kora
//  const valueSetup={
//       id:101,
//       money:6000,
//       name:'Mansur'
//     }

//   //  console.log(Kibria.treatDay(501))
//   const heroTreatday=Kibria.treatDay.bind(valueSetup);
//  console.log( heroTreatday(1))
// //js call
//  //uporer same jiista call dite pari amra vinno upaye oitake object call() bole
// //call er vetore amra jei new onjwct pass korbo tar name likhe dite hbe then comma die function er paramitre bosie dite hobe
// console.log( Kibria.treatDay.call(valueSetup,300))

// //js apply

//  //uporer same jiista call dite pari amra vinno upaye oitake object apply() bole
// //call er vetore amra jei new onject pass korbo tar name likhe dite hbe then comma die array er vetore funtcion e rparamitre bosie dite hobe function er paramitre bosie dite hobe
// console.log(Kibria.treatDay.apply(valueSetup,[100]))



var mainObject={
  name:'Mansur Ahmed',
  roll:101,
  Graduated:false,
  anotherScill:{
    sports:'cricket',
    dance:'belly dance'
  },
  freindCicle:['Tohedul Mostafa Akib','Naheyan Sakib','Amartya Swapnil Prionto'],
  politics:function(){
    return(this.roll)
    
  }

}
// task1
console.log(mainObject.politics())
//task2
console.log(`nestedObjectPropertied=${Object.keys(mainObject.anotherScill)}
  arraySecendElements=${ mainObject. freindCicle[1]}
  ${mainObject.name}`)
  //task3
  const arrowFunction=()=>89;console.log(arrowFunction())
  // task4
  const divideFunction=x=>x/7;console.log(divideFunction(49))
  //task5
  const sumDividedFunction=(x,y)=>(x+y)/2;console.log(sumDividedFunction(10,10)) 
  //
 