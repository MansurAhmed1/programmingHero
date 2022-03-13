const clickFunction=()=>{

    // apikey ke template string er moddho dukhate hobe eita na korle kaj korbena

    var apiKey=`b80fc0fb5854d202fb88e0716b91d79a`
    var inputValue=document.getElementById('inputField').value;
    //url er shese and unit metric jog kore man ke amrra celcius a convert kore nichi
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemparature(data))
  

}

 const displayTemparature=(data)=>{
     console.log(data)

     document.getElementById('cityName').innerText=data.name;
     document.getElementById('temparature').innerText=data.main.temp;
     document.querySelector('.lead').innerText=data.weather[0].main;
     document.getElementById('image').src=data.weather[0].icon;

}