import React from 'react';
import { StepEl } from "../components/steps";
import { Card, Button } from "antd";


export default function Introduction () {


    return (
        <>
            <Card className="container" >
                <div style={{backgroundColor:"#3B927B",
            //WebkitBoxShadow: '-5px 5px 8px 1px #536163 !important',
            boxShadow: '-4px 5px 8px 5px #888888',
            
                borderRadius: '5px',alignItems  : 'center', 
                textAlign : 'center', justifyContent : "center" }} >
                <h2 style={{color:"#fff", paddingTop : '2%',}}>ജല ബജറ്റ് വീട്ടിലും</h2>
                ​
                </div>

                <div >
                    <div>
                        <div style={{marginTop:"10%"}}>
                            <div style={{fontWeight:"bolder", fontSize:"20px"}}>
                                നിങ്ങളുടെ ജല ഉപയോഗം എത്ര?
                            </div>
                        </div>
                        <div style={{marginTop:"5%", fontFamily: '',
                    fontWeight:"bold", fontSize:"12px"}}>
                            നിങ്ങളുടെ മൊത്തം ജല ഉപയോഗം കണക്കാക്കാൻ ഈ
                            കാൽക്കുലേറ്റർ നിങ്ങളെ സഹായിക്കുന്നു. ടാപ്പിൽ നിന്നും വെള്ളം
                            വരുന്നുണ്ടെന്ന് നിങ്ങൾക്കറിയാം, എന്നാൽ നിങ്ങളുടെ വീടിനകത്തും
                            പുറത്തുമായി എത്ര ജലം ഉപയോഗിക്കുന്നു എന്ന് നിങ്ങൾക്കറിയാമോ?
                            ഒട്ടും താമസിക്കാതെ തന്നെ അത് നിങ്ങൾ കണ്ടെത്തും.
                            അതിനായി കളി ​​തുടങ്ങുക. 
                        </div>
                    </div>
                    <div style={{marginTop:"8%"}}>
                        <Button size="large" style={{backgroundColor:"#097B5D",
                        paddingLeft:'15px',paddingRight:'15px',
                        paddingTop:'6px',paddingBottom:'12px',
                        fontWeight:"bold", fontSize:"12px", color : '#fff',
                        borderRadius: '5px',}} >
                            തുടങ്ങുക
                        </Button>
                    </div>
                </div>
            </Card>
        </>
    )
}