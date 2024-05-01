import "./App.css"

import { images } from "./data";
import { shuffleArray } from "./functions";
import Main from "./components/Main"

const App = () => {

  const shuffledImages = shuffleArray(images);

  return (
    <div className="bg">
      <Main images={shuffledImages} />
    </div>
  );
};

export default App;