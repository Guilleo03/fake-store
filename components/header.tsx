import { FC } from "react";
import Searchbar from "./searchbar";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

type Props = {
  setOpenModal: (value: boolean) => void;
};

const Header: FC<Props> = ({ setOpenModal }) => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <h1>Logo</h1>
          <Searchbar />
          <div className="icons">
            <button className="btnCart" onClick={() => setOpenModal(true)}>
              <LocalGroceryStoreOutlinedIcon />
            </button>
            <LogoutOutlinedIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
