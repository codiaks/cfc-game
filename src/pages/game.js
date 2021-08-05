import { Card, Steps } from "antd";
import React, { useState, useEffect } from "react";
import Data from "../shared/question.json";

const { Step } = Steps;

export default function Game () {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(data);
        setData(Data.questions)
    },[])


    return (
        <div >
            <div className='header' >
                {
                    data.map(item => (
                        <h4 key={item.id}>{item.label}</h4>
                    ))
                }
                <div className="container-step"> 
                    <Steps current={0}>
                        <Step title="1" />
                        <Step title="2"  />
                        <Step title="3"  />
                        <Step title="4"  />
                        <Step title="5"  />
                        <Step title="6"  />
                        <Step title="7"  />
                        <Step title="8"  />
                    </Steps>
                </div>
                <Card className="container" >

                </Card>
            </div>

            <div className="footer-top">

            </div>
            <div className="footer"> 
                <p>A computer science portal for geeks</p>
            </div>
        </div>
    )
        }