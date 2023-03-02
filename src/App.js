import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import css from "./styles/style.css"
import { useEffect } from "react";
function App() {

  
  useEffect(() => {
    const blob = document.querySelector('#blob');

    let cursor = document.querySelector('#blob');

    document.addEventListener('mousemove', function(e){
      // cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
      let { clientX, clientY } = e;
      // blob.style.left = `${clientX}px`
      // blob.style.top = `${clientY}px`
      blob.animate({
        top: `${clientY}px`,
        left: `${clientX}px`
        }, { duration: 3000, fill: "forwards" });
        // console.log(clientX, clientY);
    })
    
  }, [])
  
    

  return (
    <div className="App">
        <div id="blob" >
        </div>
  
        <Banner/>
        <AboutMe/>
        <Projects/>
    </div>
  );
}

export default App;
