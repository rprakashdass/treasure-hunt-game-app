import Home, { CodeBox } from "./pages/";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./pages/components/NavBar";
import Questions from "./pages/Questions";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/level" element= {<Questions/>}/>
        <Route path="/codeBox" element= {<CodeBox/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
