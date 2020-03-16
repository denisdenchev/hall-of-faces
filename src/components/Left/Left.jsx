import React from "react";
import styles from "./Left.module.scss";

const Left = props => {
  const { img } = props;
  return (
    <>
      <img src={img} alt="{img}" className={styles.left} />
    </>
  );
};

export default Left;
