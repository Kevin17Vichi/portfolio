import "./App.css";
import StarsBackground from "./components/Star/StarsBackground";
import FloatingControls from "./components/Buttons/FloatingControls";
import Menu from "./components/Menu/menu";
import Name from "./components/Name/name";
import Profile from "./components/Profile/profile";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/project";
import Contact from "./components/Contact/contact";
import Social from "./components/Social/social";
import Hobbies from "./components/Hobbies/hobies";
import Education from "./components/Education/education";

function App() {
  return (
    <>
      <Menu />
      <StarsBackground />
      <FloatingControls />
      <Name />
      <Profile />
      <Skills />
      <Projects />
      <Hobbies />
      <Education />
      <Contact />
      <Social />
    </>
  );
}

export default App;
