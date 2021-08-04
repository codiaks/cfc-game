import React, { useState, useEffect } from "react";
import Data from "../shared/question.json";
import "../style.css"

export default function Game () {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(data);
        setData(Data.questions)
    },[])

    const style = {
        backgroundImage: "linear-gradient(rgb(73, 179, 250), #fff)",
        height: "100%",
        width: "100%"
    
    }
    return (
        <div className='grad' style={style}>
            {
                data.map(item => (
                    <h4 key={item.id}>{item.label}</h4>
                ))
            }
        </div>
    )
        }