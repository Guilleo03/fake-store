import { FC } from "react";
import styles from "./header.module.scss";

import Search from "@components/search/search";

const Header: FC = () => {
  return (
    <header className={styles.root}>
      <div className="container">
        <div className={styles.content}>
          <h1>Logo</h1>
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
