let url="https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//   console.log(data.slip.advice)
// })
// .catch((err)=>{
//     console.log(err)
// });


// async function getAdvice()
// {
//     let res1=await fetch(url);
//     let data1=await res1.json();
//     console.log("1st advice - "+data1.slip.advice);
//     let res2=await fetch(url);
//     let data2=await res2.json();
//     console.log("2nd advice - "+data2.slip.advice);
// }

async function getAdvice()
{
    let res1=await axios.get(url);
    // let data1=await res1.json();
    console.log("1st advice - "+res1.data.fact);
    let div=document.querySelector(".fact");
    div.innerText=res1.data.fact;
    let res2=await axios.get(url);
    // let data2=await res2.json();
    console.log("2nd advice - "+res2.data.fact);
}

let btn=document.querySelector(".btn");
btn.addEventListener("click",getAdvice);