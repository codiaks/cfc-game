import React  from "react";
import { Card, Steps } from "antd";

const { Step } = Steps;


export const StepEl = (props) => (
    <Steps current={props.current}>
        {
            props.length && props.length.map((item,i) => (
                <Step key={i}  />
            ))
        }
</Steps>
)

