import { About } from "./components/About";
import SwipeableEdgeDrawer from "./components/Drawer";
import { Footer } from "./components/footer";
import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";

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
    </div>
  );
}
export default App;
