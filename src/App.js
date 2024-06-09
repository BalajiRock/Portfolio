import "./App.css";
import Intro from "./Components/Intro/Intro.js";
import "./Components/Navbar.jsx"
import Projects from "./Components/Projects/Projects.js";
import Skills from "./Components/Skills/Skills.js";
import AboutMe from "./Components/AboutMe/AboutMe.js";
import AC from "./Components/AchievementAndCertificates/AC.js";
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom'
import Home from "./Components/Home/Home.js";

const Root = () => {
  return <>
    <div>
      <Outlet />
    </div>
  </>
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index path='/' element={<Home />} />
      <Route path='/Intro' element={<Intro />} />
      <Route path='/Projects' element={<Projects />} />
      <Route path='/Skills' element={<Skills />} />
      <Route path='/AboutMe' element={<AboutMe />} />
      <Route path='/AC' element={<AC />} />
    </Route>
  )
)


function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}
export default App;
