import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageItem from "./components/ImageItem";

const images = [
  {
    url: "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
    alt_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, cupiditate!",
  },
  {
    url: "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
    alt_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, cupiditate!",
  },
  {
    url: "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
    alt_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, cupiditate!",
  },
  {
    url: "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
    alt_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, cupiditate!",
  },
  {
    url: "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
    alt_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, cupiditate!",
  },
  {
    url: "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
    alt_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, cupiditate!",
  },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App pt-10">
      <Header />
      <div className="my-10 flex flex-row flex-wrap items-center justify-center gap-4">
        {images.map((img, index) => (
          <div className="w-1/4">
            <ImageItem key={index} {...img} />
          </div>
        ))}
      </div>
      <div className="bottom-0 w-full bg-gray-100 p-4">
        <Footer />
      </div>
    </div>
  );
}

export default App;
