import { LayoutContainer } from "./layout.styles";

import Navbar from "../navbar/navbar.component";
import Footer from "../footer/footer.component";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <LayoutContainer>{children}</LayoutContainer>
      <Footer />
    </>
  );
};
export default Layout;
