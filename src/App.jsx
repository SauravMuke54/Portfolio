import Header  from "./components/Headers/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experince";
export default function App() {
  return (
    <div className="bg-bg min-h-screen text-textPrimary p-10">
  <Header/>
  <Hero/>
  <About/>
  <Experience/>
  <Projects/>
  <Contact/>
</div>
  );
}