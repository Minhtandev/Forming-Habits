import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main";
import Home from "./pages/home";
import Habit from "./pages/habit";
import Calendar from "./pages/calendar";
import Report from "./pages/report";
import Login from "./pages/login";
import NotFound from "./pages/not-found";
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/habit" element={<Habit />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/report" element={<Report />} />
      </Route>
      {/* <Route path="/signup" element={<Signup />}></Route> */}
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
