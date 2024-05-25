import ScrollToTop from "react-scroll-to-top";

import { Layout } from "./components/Layout/Layout";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Education } from "./pages/Educations/Education";
import { Projects } from "./pages/Projects/Projects";
import { Techstack } from "./pages/Techstack/Techstack";



function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <Contact />
      </div>

      <div className="footer mb-3 ms-3">
        <h4 className="text-center">
          Made With ❤ Shreya &copy; 2024
        </h4>
      </div>

      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: '#1e1e2c', borderRadius: '80px' }}
      />

    </>
  );
}

export default App;
