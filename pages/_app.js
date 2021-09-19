import "../styles/global.css";
import Navbar from "../components/navbar/navbar.component";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
