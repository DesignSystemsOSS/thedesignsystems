import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/section-components/Header";
import './styles/index.css';
import LandingPage from "./views/LandingPage";
import TeamCard from './components/widgets/Cards/TeamCard'

function App() {
  return (
    <div className="center__view App">
      {/* header component */}
      <Header />

      <BrowserRouter>
        <Route path="/" exact component={LandingPage} />
        <Route path="/team" exact component={TeamCard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
