import Contact from "./components/Contact";
import Work from "./components/Work";
import Hero from "./components/Hero";
import Header from "./components/Header";
import "./app.scss";

function App() {
  return (
    <div className="pb-10">
      <Header />
      <Hero />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
