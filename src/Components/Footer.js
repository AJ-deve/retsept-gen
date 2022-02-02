import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <footer className={style.footer}>
        <a
          href="https://github.com/AJ-deve"
          target="_blank"
          className={style.link}
        >
          <h1 className={style.dev}>AJ-deve</h1>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
