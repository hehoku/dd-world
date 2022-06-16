import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App pt-10">
      <Header />
      <div className="fixed bottom-0 w-full bg-gray-100 p-4">
        <Footer />
      </div>
    </div>
  );
}

export default App;
