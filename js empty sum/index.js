// function functionOfEmptySum(num1,num2=0,num3=0){

// // if(num2==undefined){

// //     num2=0
// // }

// var sum=num1+num2;
// return  sum

// }
// console.log(functionOfEmptySum(9,9))





// niom1 jodi ami nanle mokabela korte chai emon dibo  
function inputTagValue(input){
 
    var valueOfInputTag=document.getElementById(input);
    var valueOfInputTags=parseFloat((valueOfInputTag.value));
    // console.log(valueOfInputTags)

    if( isNaN(valueOfInputTags)){
    valueOfInputTags=0
    };

    return valueOfInputTags;
}
// valueOfInputTags==""


document.querySelector("button").addEventListener("click",function(){

    var inputTag1Value=inputTagValue("input1");
    var inputTag2Value=inputTagValue("input2");
    var inputTag3Value=inputTagValue("input3");

    
    // let sum= parseFloat(inputTag1Value)+parseFloat(inputTag2Value)+parseFloat(inputTag3Value);
    let sum=inputTag1Value+ inputTag2Value+inputTag3Value
    console.log(sum)
 

})














// niom2 jodi amra empty string ke mokabela korte chai tahole eivabe korbo..ekhtre amra pire persefloat korbo

function inputTagValue(input){
 
    var valueOfInputTag=document.getElementById(input);
    var valueOfInputTags=(valueOfInputTag.value);
    // console.log(valueOfInputTags)

    if(  valueOfInputTags==""){
    valueOfInputTags=0
    };

    return valueOfInputTags;
}



document.querySelector("button").addEventListener("click",function(){

    var inputTag1Value=inputTagValue("input1");
    var inputTag2Value=inputTagValue("input2");
    var inputTag3Value=inputTagValue("input3");

    
    let sum= parseFloat(inputTag1Value)+parseFloat(inputTag2Value)+parseFloat(inputTag3Value);
    // let sum=inputTag1Value+ inputTag2Value+inputTag3Value
    console.log(sum)
 

})














// var namse1="mansur Ahmed"
// var names2="Arman"
// console.log(`am jabo ${ anmes} jabe ${names} jabo`)
