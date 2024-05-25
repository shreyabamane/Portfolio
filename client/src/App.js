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

    </>
  );
}

export default App;
