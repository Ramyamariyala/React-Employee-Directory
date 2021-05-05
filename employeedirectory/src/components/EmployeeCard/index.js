import React from "react";
import "./style.css";

funtion EmployeeCard(props){
    return(
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image}/>
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong>{props.name}
                    </li>
                    <li>
                        <strong>Position:</strong>{props.position}
                    </li>
                    <li>
                        <strong>Date of Birth:</strong>{props.birth}
                    </li>
                    <li>Country:</li>{props.country}
                </ul>
            </div>
        </div>
    )
}

export default EmployeeCard;