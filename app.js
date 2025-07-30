const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns=document.querySelectorAll(".dropdown select");

const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const mssg=document.querySelector(".msg");


for(let select of dropdowns){
    for(code in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=code;
        newOption.value=code;
        if(select.name==="from"&& code==="USD"){
            newOption.selected="selected";
        }
        if(select.name==="to"&& code==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
}
for(let select of dropdowns){
    select.addEventListener("change",()=>{
    updateFlag(select);
})
}

const updateFlag =(element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newcode=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let newimg= element.parentElement.querySelector("img");
    newimg.src=newcode;
}

const btn=document.querySelector("button");

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let value=amount.value;
    

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
   let final=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
   let result=final*value;
   mssg.innerText=`${value} ${fromCurr.value} = ${result} ${toCurr.value}`;
})


// window.addEventListener("load", () => {
//   updateExchangeRate();
// });