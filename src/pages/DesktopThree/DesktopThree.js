import React, { useContext } from "react";
import "./DesktopThree.css"
import { Col, Container, Image, Row } from "react-bootstrap";
import wallImg from "../../assets/desktop_three.png";
import clickIcon from "../../assets/click_icon.png"
import Button from "../../components/Button/Button";
import Context from "../../Context";

export default function DesktopThree() {
    const { apiData, setApiData } = useContext(Context);

    console.log("third page pr:", apiData);
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div>
              <Image src={wallImg} width="629px" height="407px" />
            </div>
            <div className="mt-4 d-flex flex-row justify-content-between align-items-start">
              <div style={{color:"#1F2937", fontSize:"18px"}}>Total price: <span style={{color:"#0BB764"}}>$750</span></div>
              <div className="d-flex flex-row justify-content-between align-items-start" style={{width:"60%"}}>
                <div className="mr-2">
                  <Button
                    btnText={"Add furniture"}
                    btnType={"borderBtn"}
                  />
                </div>
                <div className="ml-2">
                  <Button btnText={"Redesign"} 
                    btnType={"third_btn_design"} />
                </div>
              </div>
            </div>
          </Col>

          
          <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div className="third_right_side">
                <div>
                    <Image src={clickIcon} className="click_icon_setting"/>
                </div>
                <div className="third_right_side_text">Click on any item to see details</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
