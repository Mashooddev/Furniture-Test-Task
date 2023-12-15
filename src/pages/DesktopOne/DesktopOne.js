import React, { useContext } from "react";
import "../DesktopOne/DesktopOne.css";
import { Image } from "react-bootstrap";
import imageOne from "../../assets/desktop_one.png";
import CameraIcon from "../../components/CamIcon/CameraIcon";
import { useNavigate } from "react-router-dom";
import Context from '../../Context';

export default function DesktopOne() {
  const navigate = useNavigate ();
  const { apiData, setApiData } = useContext(Context);

  console.log("Api Response:", apiData);

  const ChangePage = () => {
    navigate("/floor-plan");
  }


  return (
    <div>
      <div className="desktop_one_main">
        <div className="heading_one">Select room</div>
        <div className="para_one">Click on a camera icon to start</div>
        <div className="mt-3">
          <Image src={imageOne} alt="image one" />
        </div>

        <div onClick={ChangePage}>
          <CameraIcon top="74%" left="35%"/>
        </div>
        <div onClick={ChangePage}>
          <CameraIcon top="50%" left="38%"/>
        </div>
        <div onClick={ChangePage}>
          <CameraIcon top="53%" left="53%"/>
        </div>
        <div onClick={ChangePage}>
          <CameraIcon top="72%" left="59%"/>
        </div>
      </div>
    </div>
  );
}
