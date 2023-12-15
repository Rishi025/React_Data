import React from 'react';
import bakwas from "./New folder/bakwas.jpg"


function FetchApi() {

    function GetData()
    {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>{return res.json()})
        .then((data)=>{
            // console.log(data)

            // console.log(data[1].title)

           let html = "<h1>--- API DATA ---</h1>"

          data.map((v)=>(
            
        //    console.log(v.title)

        html = html+ `

        <h3 style="color:blue">${v.title}</h3>
        <li><img src=${v.url} height="150px" class="xyz"></li>
        <li><img src=${v.thumbnailUrl}></li>
        

        
        `
           
          ))

          document.getElementById('t').innerHTML = html
        
        })
    }

  return (
    <div>
        <button onClick={GetData}>Fetch API Data</button>

        <div id='t'></div>
        <img src='https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8='/>

        <img src={bakwas} height="200px"/>

    </div>
  )
}

export default FetchApi
