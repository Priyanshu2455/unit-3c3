// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let total=JSON.parse(localStorage.getItem("amount"));
//console.log(total)
let total1=total.reduce((acc,el)=>{
  return acc+Number(el)
},0)
document.getElementById("wallet").innerText=total1

let id;
//`https://www.omdbapi.com/?s=${input}&apikey=d32c24b9`

async function getdata(){

    try {
        let input=document.getElementById("search").value
        let res=  await fetch(`https://www.omdbapi.com/?s=${input}&apikey=d32c24b9`)
        let data= await res.json()
        appendata(data.Search)
        //const movies=data.Search
        
    } catch (error) {
        console.log("error",error)
        
    }
  
}


let arr2=[];
function appendata(data){
    data.forEach((el)=>{
        let div =document.createElement("div")

        let image=document.createElement("img")
            image.src=el.Poster;
        let name=document.createElement("p")
            name.innerText=el.Title;
        let btn=document.createElement("button")   
            btn.innerText="book now";
            btn.setAttribute("class","book_now") 
            btn.onclick=()=>{
                arr2.push(el)
                localStorage.setItem("movie",JSON.stringify(arr2))
                window.location.href="checkout.html"
            }

            div.append(image,name,btn)
            document.getElementById("movies").append(div)

    })

}

async function main(){
    let data= await getdata();

    if(data==undefined){
        return false;
    }

    appendata(data)

}

function debounce(func, delay){
    if(id){
        clearTimeout(id)
    }

    id=setTimeout(function(){
     func()
    },delay)

}