import styles from "./Header.module.css";

import ignitelogo from "../assets/ignitelogo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ignitelogo} alt="logotipo" />
      <strong>Shiota Feed</strong>
    </header>
  );
}
