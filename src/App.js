import React from "react";
import { Routes } from "./Routes";
import { Menus } from "./Menus";
import styles from "./App.module.css";

function App() {
  return (
    <div className={`app ${styles.app}`}>
      <Menus />
      <div className={styles.main_container}>
        <Routes />
      </div>
    </div>
  );
}

export default App;
