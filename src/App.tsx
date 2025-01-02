import Home, { CodeBox } from "./pages/";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Page from "./pages/Level/l1/Page";
import NavBar from "./pages/components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/level" element= {<Page/>}/>
        <Route path="/codeBox" element= {<CodeBox/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
