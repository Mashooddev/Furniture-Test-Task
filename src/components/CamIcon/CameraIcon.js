import React from 'react'
import { Image } from 'react-bootstrap';
import Cam from "../../assets/cam_shots.png"

export default function CameraIcon({ top, left }) {
    const styles = {
        cursor: 'pointer',
        position: 'absolute',
        top: top, // Default to 5% if top prop is not provided
        left: left, // Default to 15% if left prop is not provided
      };
  return (
    <div style={styles}>
      <Image src={Cam} width="45px" height="45px" />
    </div>
  )
}
