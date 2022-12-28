import { FC } from "react";
import Searchbar from "./searchbar";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Header: FC = () => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <h1>Logo</h1>
          <Searchbar />
          <div className="icons">
            <LocalGroceryStoreOutlinedIcon />
            <LogoutOutlinedIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
