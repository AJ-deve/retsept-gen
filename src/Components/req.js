import React from "react";
import style from './req.module.css';


const Req = ({label,img,disc,ingredients,url}) => {
    return (
      <div className={style.card}>
        <h1 className={style.label}>{label}</h1>
        <h2>Ingredients :</h2>
        <ul className={style.assets}>
          {ingredients.map((ingredient) => (
            <li className={style.assets}>{ingredient.text}</li>
          ))}
        </ul>
        <img className={style.img} src={img}></img>
        <p className={style.disc}>
          Type of Food: <strong>{disc}</strong>
        </p>
        <a className={style.source} href={url} target="_blank">
          Go to Source 
        </a>
      </div>
    );
}

export default Req;