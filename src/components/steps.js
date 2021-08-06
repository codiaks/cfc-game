import React  from "react";
import { Card, Steps } from "antd";

const { Step } = Steps;


export const StepEl = (props) => (
    <Steps current={props.current}>
    <Step  />
    <Step   />
    <Step  />
    <Step  />
    <Step  />
    <Step   />
    <Step  />
    <Step  />
</Steps>
)

