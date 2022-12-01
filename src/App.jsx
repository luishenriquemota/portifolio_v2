import { About } from "./components/About";
import SwipeableEdgeDrawer from "./components/Drawer";
import { Footer } from "./components/footer";
import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";
import { NavSocial } from "./components/Nav-social";
import { ParticlesComponent } from "./components/particles";

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <About />
      <Technologies />
      <Projects />
      <SwipeableEdgeDrawer />
      <Footer />
      <NavSocial />
      <ParticlesComponent />
    </div>
  );
}
export default App;
