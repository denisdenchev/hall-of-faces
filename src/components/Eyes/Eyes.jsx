import React from "react";
import styles from "./Eyes.module.scss";
import Left from "../Left";
import Right from "../Right";
import left from "../../assets/left.png";
import right from "../../assets/right.png";

const Eyes = () => {
  return (
    <>
      <section className={styles.eyes}>
        <Left img={left} />
        <Right img={right} />
      </section>
    </>
  );
};

export default Eyes;
