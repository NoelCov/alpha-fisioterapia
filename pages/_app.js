import "../styles/global.css";

import Navbar from "../components/navbar/navbar.component";
import Footer from "../components/footer/footer.component";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
