import React, { useState } from "react";
import styles from "./Face.module.scss";
import Eyes from "../Eyes";
import Moustache from "../Moustache";
import moustache from "../../assets/moustache.png";
import InputField from "../InputField";
import ButtonAndInputField from "../ButtonAndInputField";

const Face = props => {
  const [degree, changeDegree] = useState(0);
  const { img } = props;
  return (
    <>
      <section className={styles.faceSection}>
        <img src={img} alt="{img}" className={styles.face} />
        <Eyes />
        <InputField
          placeHolderText={"Input number here"}
          handleInput={inputVal => inputVal}
        />
        <ButtonAndInputField handleClick{() => changeDegree(degree + 1)} />
        <Moustache img={moustache} />
      </section>
    </>
  );
};

export default Face;
