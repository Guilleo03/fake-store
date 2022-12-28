import { FC } from "react";

type Props = {
  children: any;
};

const Layout: FC<Props> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
