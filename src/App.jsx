import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";



export default function App() {
  return (
    <div className="container">
      <div className="card">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}
