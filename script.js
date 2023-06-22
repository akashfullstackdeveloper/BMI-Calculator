const weight=document.getElementById("weight");
const height=document.getElementById("height");
const button=document.querySelector("button");
const result=document.querySelector("h3");

button.addEventListener("click",calculate);

function calculate(){
    let fhei=parseInt(height.value);
    let fwei=parseInt(weight.value);
    let h=fhei*0.01;
    fhei=h*h;
    res=fwei/fhei;
    res= res.toFixed(2);
    if(res<=18.4){
        
        result.innerHTML=`You are under Weight and Your BMI is :${res}`;
    }
    else if(res>=18.5 && res<=24.9){
        result.innerHTML=`You are Normal Weight and Your BMI is :${res}`;
    }
    else if(res>=25 && res<=39.9){
        result.innerHTML=`You are over Weight and Your BMI is :${res}`;
    }
    else if(res>=40){
        result.innerHTML=`You are Obesity and Your BMI is :${res}`;
    }
}