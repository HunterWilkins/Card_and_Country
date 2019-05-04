import React from "react";
// import {Link} from "react-router-dom";
import"../pages/style.css";

function ResultBox(props) {
    return (
        <div id = "results">
        <div className = "result">
        <header>
          <h3 className = "title">{props.title}</h3>
        </header>

        <p className = "authors">Authors...{props.authors ? props.authors: "No known authors..."}</p>
          <div className = "img-container">
            <img alt = {props.title} src = {props.image ? props.image : props.placeholder} />
          </div>
          
          <p className = "synopsis">{props.description}</p>
          <a href={props.link}>{props.title} Link</a>                  
        </div>
        
      
      </div>
    );
} 

export default ResultBox;