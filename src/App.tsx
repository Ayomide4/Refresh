import Header from "./components/Header";
import About from "./components/About";
import Events from "./components/Events";
import Donation from "./components/Donation";
import Footer from "./components/Footer";
import { useSmoothScroll } from "./utils/useSmoothScroll";

// TODO:
// - animation for text popping in


function App() {

  useSmoothScroll()

  return (
    <div className="flex flex-col min-h-screen w-full bg-background overflow-hidden" id="app">
      <Header />
      <main className="flex-grow">
        <About />
        <Events />
        <Donation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
