import React, { Component } from 'react';
import './displayCelebs.css';


function celebrities(props){

 
   
return(
 <div className="movieCard">

     <img src={props.pictureUrl}></img>
     <h4>{props.name}</h4>
     <p>{props.popularity}</p>

     <button onClick = {props.delete}>delete</button>
    
  </div>
);



}

export default celebrities;