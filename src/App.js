import Header from "./components/header";
import Video from "./components/video";
import Whatis from "./components/whatis";
import Calculate from "./components/calculate";
import Start from "./components/start";
import Download from "./components/download";
import Brands from "./components/brands";
import Question from "./components/question";
import Deep from "./components/deep";



function App() {
  return (
    <>
    <div>
    <Header></Header>
    <div className="body1">
      <Video></Video>
      <Whatis></Whatis>
      <Calculate></Calculate>
      <Start></Start>
      <Download></Download>
      <Brands></Brands>
      <Question></Question>
      <Deep></Deep>
    </div>
    </div>
    </>
  );
}

export default App;
