import React from "react";
import "./index.css";

const RouteltteField = (props) =>{
    const { title, value, unit } = props;
    console.log(title)
    return(
        <div className="contain">
            <div className="main-field">
                <div style={{ display: "flex", justifyContent: "center" }}>{title}</div>
                <div className="content">
                    <div className="value">
                        <span>{unit}</span>
                        <div className="info" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <span>{value}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RouteltteField;