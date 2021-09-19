import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/section-components/Footer";
import Header from "./components/section-components/Header";
import './styles/index.css';
import Careers from "./views/Careers";
import Discord from "./views/Redirect/Discord";
import LandingPage from "./views/LandingPage";
import Products from "./views/Products";
import Team from "./views/Team";
import Twitter from "./views/Redirect/Twitter";
import GitHub from "./views/Redirect/GitHub";
import LinkedIn from "./views/Redirect/Linkedin";
import PersonalLinks from "./views/PersonalLinks";

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
        {/* routes for re-direction to external links */}
        <Route path="/discord" exact component={Discord} />
        <Route path="/twitter" exact component={Twitter} />
        <Route path="/github" exact component={GitHub} />
        <Route path="/linkedin" exact component={LinkedIn} />
        <Route path="/yash" exact component={() => PersonalLinks('yash')} />
      </BrowserRouter>
      {/* footer component */}
      <Footer />
    </div>
  );
}

export default App;
