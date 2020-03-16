import React from "react";
import styles from "./Right.module.scss";

const Right = props => {
  const { img } = props;
  return (
    <>
      <img src={img} alt="{img}" className={styles.right} />
    </>
  );
};

export default Right;
