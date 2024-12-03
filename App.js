// import img1 from  "../public/images/img1.jpg"

import React from "react";


import './App.css';
function App(){
  const listings = [
    {
      "id": 1,
      "description": "nature",
      "image":  "./images/img1.jpg"
    },
    {
      "id": 2,
      "description": "nature1",
      "image": "./images/img2.webp"
    },
    {
      "id": 3,
      "description": "nature",
      "image":  "./images/img1.jpg"
    },
    {
      "id": 4,
      "description": "nature1",
      "image": "./images/img2.webp"
    },
    {
      "id": 5,
      "description": "nature",
      "image":  "./images/img1.jpg"
    },
      {
        "id": 6,
        "description": "nature1",
        "image": "./images/img2.webp"
      },
      {
        "id": 7,
        "description": "nature",
        "image":  "./images/img1.jpg"
      },
        {
          "id": 8,
          "description": "nature1",
          "image": "./images/img2.webp"
        },
]
  return(
    <div >
      {listings.map((listings) => (
                <div style={{display:"inline-block"}}>
               <h1>{listings.id}</h1>
              
                <img src={listings.image} alt={listings.id} style={{marginLeft:"50px",height:"300px" ,width:"300px"}}
                 />
                <p >{listings.description}</p>
                </div>
                ))}
    </div>
    
  )
}
  
  export default App;      
