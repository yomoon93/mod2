import React from "react";

import "../saved.css";

function Saved(props) {
//   console.log(props.save);

  return (
    <div className="Saved">
      {props.save.map((data, key) => {
        return (
          <div className="container" key={key}>
            <li className="savedBox">
              <div className="info"> Address: {data.address} </div>
           
              <div className="info"> Price: {data.price} </div>
              
              <div className="info"> Bedrooms: {data.bedrooms} </div>
            
              <div className="info"> Bathrooms: {data.bathrooms} </div>
            
              <div className="info">
                PropertyType: {data.propertyType}{" "}
              </div>
              <div className="btn-box">
              
             
              <button id="btnb" onClick={(e) => props.handleImage(e, data.zpid)}>
                Show Image
              </button>
               
              </div>
             
            </li>
            {data.url && data.show ? (
              <img
                id="savedPhoto"
                onClick={data.url}
                alt="pix"
                src={data.url}
              />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}
export default Saved;


// <button
//                 id="btnS"
//                 onClick={() => this.props.setSave([...this.props.save, data])}
//               >
//                 Save
//               </button>