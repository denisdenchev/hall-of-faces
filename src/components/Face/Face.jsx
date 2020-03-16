import React, { useState } from "react";
import styles from "./Face.module.scss";
import Moustache from "../Moustache";
import moustache from "../../assets/moustache.png";
import InputField from "../InputField";
import Button from "../Button";
import Left from "../Left";
import Right from "../Right";
import left from "../../assets/left.png";
import right from "../../assets/right.png";

const Face = props => {
  const [degree, changeDegree] = useState(0);
  const { img, imageText } = props;
  const [isRotated, rotate] = useState(true);

  const rotateAngle = {
    transform: `rotate(${degree}deg)`
  };

  const rotateClass = isRotated ? null : rotateAngle;

  return (
    <>
      <section className={styles.faceSection}>
        <img src={img} alt={`${imageText}`} className={styles.face} />
        <div className={styles.eyeStyles}>
          <div style={rotateClass}>
            <Left img={left} />
          </div>
          <div style={rotateClass}>
            <Right img={right} />
          </div>
        </div>
        <InputField
          placeHolderText={"Input number here"}
          handleInput={inputVal => changeDegree(inputVal)}
        />
        <Button handleClick={() => rotate(!isRotated)} text="Submit" />
        <div style={rotateClass} className={styles.moustache}>
          <Moustache img={moustache} />
        </div>
        {console.log(degree)}
      </section>
    </>
  );
};

export default Face;
