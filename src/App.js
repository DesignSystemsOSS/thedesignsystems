import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/section-components/Footer";
import Header from "./components/section-components/Header";
import './styles/index.css';
import Careers from "./views/Careers";
import LandingPage from "./views/LandingPage";
import Products from "./views/Products";
import Team from "./views/Team";

function App() {
  return (
    <div className="center__view App">
      {/* header component */}
      <Header />

      <BrowserRouter>
        <Route path="/" exact component={LandingPage} />
        <Route path="/team" exact component={Team} />
        <Route path="/products" exact component={Products} />
        <Route path="/careers" exact component={Careers} />
      </BrowserRouter>
      {/* footer component */}
      <Footer />
    </div>
  );
}

export default App;
