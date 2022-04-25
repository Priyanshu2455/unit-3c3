// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

console.log("hello")

let total=JSON.parse(localStorage.getItem("amount"));
//console.log(total)
let total1=total.reduce((acc,el)=>{
  return acc+Number(el)
},0)
document.getElementById("wallet").innerText=total1

let data=JSON.parse(localStorage.getItem("movie"))

data.forEach((el)=>{
    let div =document.createElement("div")

    let image=document.createElement("img")
        image.src=el.Poster;
    let name=document.createElement("h2")
        name.innerText=el.Title;
    

        div.append(name,image)
        document.getElementById("movie").append(div)

})

document.getElementById("confirm").onclick=()=>{
    setTimeout(()=>{
     alert("Insufficient Balance!")
    },1000)
    setTimeout(()=>{
        alert("Booking successful!")
       },3000)
}