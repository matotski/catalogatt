import React from "react";
import classes from "./ProductCard.module.css";
const ProductCard = ({
  title,
  category,
  description,
  image,
  price,
  rating,
}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <img src={image} alt="" className={classes.card_photo} />
        <div className={classes.title}>{title}</div>
        <div className={classes.desc}>{description}</div>
        <div>{price}</div>
        <div>{rating}</div>
        <div className={classes.btn_keep}>
          <a href="#">Купить</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
