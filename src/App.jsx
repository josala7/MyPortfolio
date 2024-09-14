import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { MainBanner } from "./components/MainBanner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import About from "./components/About";
import { Footer } from "./components/Footer";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainBanner />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
