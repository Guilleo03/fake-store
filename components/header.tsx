import { FC } from "react";
import Searchbar from "./searchbar";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useStore } from "./../store";
import { signOut } from "next-auth/react";

type Props = {
  setOpenModal: (value: boolean) => void;
};

const Header: FC<Props> = ({ setOpenModal }) => {
  const { cart } = useStore();

  const cartLength = cart.length;

  return (
    <header>
      <div className="container">
        <div className="content">
          <h1>Logo</h1>
          <Searchbar />
          <div className="icons">
            <button className="btnCart" onClick={() => setOpenModal(true)}>
              <LocalGroceryStoreOutlinedIcon />
              {cartLength > 0 && (
                <span className="cartLength">{cartLength}</span>
              )}
            </button>
            <button
              onClick={() =>
                signOut({
                  callbackUrl: `/`,
                })
              }
              className="btnCart"
            >
              <LogoutOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
