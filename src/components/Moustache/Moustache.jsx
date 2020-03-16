import React from "react";
import styles from "./Moustache.module.scss";

const Moustache = props => {
  const { img } = props;
  return (
    <>
      <img src={img} alt="{moustache}" className={styles.moustache} />
    </>
  );
};

export default Moustache;
