import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import css from "./styles/style.css"
function App() {

  
  
  return (
    <div className="App">
      
        <Banner/>
        <AboutMe/>
        {/* <Modal /> */}
        
        <Projects/>
    </div>
  );
}

export default App;
