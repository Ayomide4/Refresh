import Header from "./components/Header";
import About from "./components/About";
import Events from "./components/Events";
import Donation from "./components/Donation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
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
