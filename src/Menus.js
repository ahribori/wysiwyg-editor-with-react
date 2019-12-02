import React from "react";
import styles from "./App.module.css";
import { Link } from "react-router-dom";

export const Menus = () => (
  <nav className={styles.menu_container}>
    <ul>
      <Link to="/">
        <li>TUI Editor</li>
      </Link>
      <Link to="/summernote">
        <li>Summernote Editor</li>
      </Link>
      <Link to="/ckeditor">
        <li>CKEditor Editor</li>
      </Link>
    </ul>
  </nav>
);
