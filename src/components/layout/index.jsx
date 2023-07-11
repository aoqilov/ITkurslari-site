import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <div className="layout">
      <div className="layout-header">
        <Header />
      </div>
      <main className="layout-main">
        <Outlet />
      </main>
      <div className="layout-footer">
        <Footer />
      </div>
    </div>
  );
};

export default index;
