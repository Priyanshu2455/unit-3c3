// Store the wallet amount to your local storage with key "amount"
console.log("hello")

let arr=JSON.parse(localStorage.getItem("amount"))||[];

document.getElementById("add_to_wallet").onclick=()=>{
    let input=document.getElementById("amount").value;
    arr.push(input)
    localStorage.setItem("amount",JSON.stringify(arr))

     var total=arr.reduce((acc,el)=>{
 return acc+ Number(el)
    },0)
       document.getElementById("wallet").innerText=total;


}

document.getElementById("book_movies").onclick=()=>{
    window.location.href="movies.html"
}
