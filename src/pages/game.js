import React from 'react';
import { StepEl } from "../components/steps";
import { Card, Steps } from "antd";


export default function Game () {


    return (
        <>
            <div className="container-step">
                <StepEl current={2} />
            </div>
            <Card className="container" >

            </Card>
        </>
    )
}