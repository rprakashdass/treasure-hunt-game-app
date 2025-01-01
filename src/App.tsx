import Home, { CodeBox } from "./pages/";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/codeBox" element= {<CodeBox/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
