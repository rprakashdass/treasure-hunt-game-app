import Home from "./pages/";
import CodeBox from "./pages/components/CodeBox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/components/NavBar";

const CodeBoxWrapper = () => {
  return <CodeBox key={Date.now()} />;
};

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/codeBox" element={<CodeBoxWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
