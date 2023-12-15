import React, { useContext, useState } from "react";
import "../DesktopTwo/DesktopTwo.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import wallImg from "../../assets/desktop_two.png";
import Accordion from "react-bootstrap/Accordion";
import Button from "../../components/Button/Button";
import Context from "../../Context";

export default function DesktopTwo() {
  const { apiData, setApiData } = useContext(Context);

  console.log("two page pr:", apiData);

  const [selectedStyleIndex, setSelectedStyleIndex] = useState(1);
  const [selectedStyleText, setSelectedStyleText] = useState("");
  const handleStyleClick = (index) => {
    setSelectedStyleIndex(index);

    // Map the index to the corresponding theme name
    const themeNames = ["Theme One", "Theme Two", "Theme Three", "Theme Four"];
    setSelectedStyleText(themeNames[index]);

    console.log("Selected Style Index:", index);
  };
  const styles = [
    { imgSrc: wallImg, width: "141.06px", height: "95.79px" },
    { imgSrc: wallImg, width: "141.06px", height: "95.79px" },
    { imgSrc: wallImg, width: "141.06px", height: "95.79px" },
    { imgSrc: wallImg, width: "141.06px", height: "95.79px" },
  ];

  const [selectedColorIndex, setSelectedColorIndex] = useState(null);
  const handleColorClick = (index) => {
    setSelectedColorIndex(index);
  };

  const colors = [
    { color: "#FFF0CD" },
    { color: "#80808080" },
    { color: "#575757" },
    { color: "#A35656" },
  ];

  const [selectedBudgetIndex, setSelectedBudgetIndex] = useState(1);
  const [selectedBudgetText, setSelectedBudgetText] = useState("");
  const handleBudgetClick = (index) => {
    setSelectedBudgetIndex(index);
    // Map the index to the corresponding theme name
    const budgetAmount = [
      "1000 SAR-5000 SAR",
      "6000 SAR-10.000 SAR",
      "11,000 SAR-15,000 SAR",
      "16,000 SAR-20,000 SAR",
    ];
    setSelectedBudgetText(budgetAmount[index]);
  };

  const Budgets = [
    { budget: "1000 SAR-5000 SAR" },
    { budget: "6000 SAR-10.000 SAR" },
    { budget: "11,000 SAR-15,000 SAR" },
    { budget: "16,000 SAR-20,000 SAR" },
  ];

  const hasData =
    selectedStyleText !== "" &&
    selectedColorIndex !== null &&
    selectedBudgetText !== "";

  const page = "/favourites";
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div>
              <Image src={wallImg} width="629px" height="407px" />
            </div>
          </Col>

          <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div
                    className="d-flex flex-row justify-content-between align-items-center"
                    style={{ width: "95%" }}
                  >
                    <div>1. Select your style</div>
                    <div>{selectedStyleText}</div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {styles.map((style, index) => (
                      <Col
                        sm={3}
                        md={3}
                        lg={3}
                        xl={3}
                        xxl={3}
                        key={index}
                        className={
                          index === selectedStyleIndex
                            ? "selected_style"
                            : "un_selected_style"
                        }
                        onClick={() => handleStyleClick(index)}
                      >
                        <Image
                          src={style.imgSrc}
                          width={style.width}
                          height={style.height}
                        />
                      </Col>
                    ))}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div
                    className="d-flex flex-row justify-content-between align-items-center"
                    style={{ width: "95%" }}
                  >
                    <div>2. Select your color</div>
                    {selectedColorIndex !== null && ( // Only render if a color is selected
                      <div
                        className="small_rectangle"
                        style={{
                          backgroundColor: colors[selectedColorIndex].color,
                        }}
                      ></div>
                    )}
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {colors.map((colors, index) => (
                      <Col
                        sm={3}
                        md={3}
                        lg={3}
                        xl={3}
                        xxl={3}
                        key={index}
                        className={
                          index === selectedColorIndex
                            ? "selected_style"
                            : "un_selected_style"
                        }
                        onClick={() => handleColorClick(index)}
                      >
                        <div
                          className="rectangle"
                          style={{ backgroundColor: colors.color }}
                        ></div>
                      </Col>
                    ))}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div
                    className="d-flex flex-row justify-content-between align-items-center"
                    style={{ width: "95%" }}
                  >
                    <div>1. Select your style</div>
                    <div>{selectedBudgetText}</div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {Budgets.map((Budgets, index) => (
                      <Col
                        sm={5}
                        md={5}
                        lg={5}
                        xl={5}
                        xxl={5}
                        key={index}
                        className={
                          index === selectedBudgetIndex
                            ? "budget_selected_buttons"
                            : "budget_unselected_buttons"
                        }
                        onClick={() => handleBudgetClick(index)}
                      >
                        <div>{Budgets.budget}</div>
                      </Col>
                    ))}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="mt-4">
              <Button
                page={page}
                btnText={"Generate design"}
                btnType={hasData ? "btn_design" : "disable_btn_design"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
