import React, { useEffect, useState } from 'react';
import { StepEl } from "../components/steps";
import { Button, Card, Modal } from "antd";
import Data from "../shared/question.json";
import { ForwardOutlined, BackwardOutlined, CloseSquareOutlined} from "@ant-design/icons"
import badge from "../assets/img/badge.png";

export default function Game (props) {

    const [current, setCurrent] = useState(0);
    const [mark, setMark] = useState({score : 0, unitConsumption: 0})
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState([]);
    const [question, setQuestion] = useState({});
    const [disableNext, setDisableNext] = useState(false);
    const [disablePrev, setDisablePrev] = useState(false);
    const [selectedAnswers, setSelectedArray] = useState([]);
    const [state, setState] = useState(false);

    useEffect(() => {
        setData(Data.questions);
        let q = Data.questions[0];
        setSelectedArray([])
        setDisablePrev(true);
        setDisableNext(false);
        setQuestion(q);
        setCurrentIndex(0);
        setMark({score : 0, unitConsumption: 0});
        setState(false);
    },[props.load])

    const goToPrevSlide = () => {
        
        const newPointer = currentIndex === 0 ? data.length -1 : currentIndex - 1;
        let q =  data[newPointer];
        newPointer === 0 ? setDisablePrev(true) : setDisablePrev(false);
        setDisableNext(false);
        setQuestion(q);
        setCurrentIndex(newPointer);
      }
      
    const goToNextSlide = () => {
        
        const newPointer = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
        let q =  data[newPointer];
        newPointer === data.length - 1 ? setDisableNext(true) : setDisableNext(false);
        setDisablePrev(false)
        setQuestion(q);
        setCurrentIndex(newPointer);
      }

    const onScoreSelect = (item) => {
        try{
            let qid = item.id.split('-')[0];
            let arr = selectedAnswers;
            let exid = arr.findIndex(x => x.id.split('-')[0] === qid);
            if(exid !== -1) {
                arr[exid] = item
            }
            else {
                arr.push(item)
            }
            setSelectedArray([...arr])
        }
        catch(err) {
            console.log(err)
        }
    }

    const finish = () => {
        let score = 0;
        let consumption = 0;
        selectedAnswers.map(item => {
            score = score + item.score;
            consumption = consumption + item.unitConsumption;
        })
        setMark({score : score, unitConsumption: consumption});
        setState(true);
    }

    const handleOk = () => {
        setState(false);
        window.location.reload();
      };
    
      const handleCancel = () => {
        setState(false);
        window.location.reload();
      };

    return (
        <>
            <div className="container-step">
                <StepEl current={currentIndex} length={data}/>
            </div>
            <Card className="container" >
                {
                        <div style={{marginTop:"5%"}}>
                        <h3 style={{fontWeight:"bolder", fontSize:"20px", color:"#0B8BF2"}}>
                            {question.label}
                        </h3>
                        <div style={{ marginTop:"5%",
                            display:"flex", justifyContent:'space-around', alignItems:"center"}}>
                        {
                            question.options && question.options.map(img => (
                                <div className="question" key={img.id}>
                                <Card  style={{
                                      backgroundColor: selectedAnswers.find(x => x.id === img.id) ? "#67FF9F" : '',
                                    //WebkitBoxShadow: '-5px 5px 8px 1px #536163 !important',
                                    
                                }}
                                    onClick={() => onScoreSelect(img)}
                                >
                                    <div>
                                    <img width={150} height={165} 
                                        src={img.image} alt="" />
                                    </div>
                                    <div style={{marginTop : '4%',fontWeight:"bold", fontSize:"16px",}}>
                                        {img.label}
                                    </div>
                                </Card>
                            </div>
                            ))
                        }
                        </div>
                    </div>
                }
                <div style={{ marginTop:'5%',display:"flex",
                alignItems:'center',
                 justifyContent:'space-between'}} >
                    <div>
                        <Button size="large" style={{color:'red',border:'none'}}
                            icon={<BackwardOutlined style={{fontSize:'32px'}} />}
                            disabled={disablePrev}
                            onClick={()=>goToPrevSlide()}
                        >
                            
                        </Button>
                    </div>
                    {
                        disableNext ?
                        <div>
                        <Button size="large" style={{borderWidth:'3px',borderColor:'#0B8BF2', borderRadius:"5px",
                            color:"#0B8BF2",
                        fontSize:"16px", fontWeight:"bold"}}
                            
                            //disabled={disableNext}
                            onClick={()=>finish()}
                            >
                                {`സ്കോർ  കാണുക >>`}
                        </Button>
                    </div> 
                        :
                    <div>
                        <Button size="large" style={{color:'green',border:'none'}}
                            icon={<ForwardOutlined style={{fontSize:'32px'}} />} 
                            disabled={disableNext}
                            onClick={()=>goToNextSlide()}
                            >

                        </Button>
                    </div> 
                    }
                </div>
            </Card>
            {
                state ?

                    <Modal
                        centered
                        visible={state} onOk={handleOk} onCancel={handleCancel}
                        maskClosable={false}
                        footer={null}
                        closable={false}
                    >
                        <div>
                        <div style={{display: "flex",
                        justifyContent: "center",
                        alignItems: "center",}}>
                            <img width={150} height={165} 
                                src={badge} alt="" />
                            </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center", marginTop: '4%', fontWeight: "bold", fontSize: "20px",
                        }}>
                                                                
                            <div>
                                <div >
                                    നിങ്ങളുടെ സ്കോർ : {mark.score}
                                </div>
                                <div>
                                    ശരാശരി ഉപയോഗം : {mark.unitConsumption} L
                                </div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center", marginTop: '4%', fontWeight: "bold", fontSize: "20px",
                                }}>
                                    <Button
                                        size="large" style={{ color: 'red', border: 'none' }}
                                        icon={<CloseSquareOutlined style={{ fontSize: '32px' }} />}
                                        onClick={() => handleCancel()}
                                    >

                                    </Button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Modal> : ''}
        </>
    )
}