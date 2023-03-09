import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
      </div>
    </BrowserRouter>
  );
};

export default App;
