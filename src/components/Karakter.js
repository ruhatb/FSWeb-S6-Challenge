import React from "react";



const Karakter =( { props} ) => {

    return (
        <div className="accord">
         
        <p> {props.films} </p>
    
       <h3>{props.url}</h3>
       <h3>{props.birth_year} </h3>
       
         </div>
        
    );
    };

    export default Karakter;