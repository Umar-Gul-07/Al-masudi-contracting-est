import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Pages/Base";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Event from "./Pages/Event";
import EventSingle from "./Pages/EventSingle";
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/include/BlogDetails";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
      <BrowserRouter>

        {/* ToastContainer */}
        <ToastContainers />

        {/* Routes */}
        <Routes>

          {/* Web Routes */}
          <Route path='/' element={<Base><Home/></Base>} />
          <Route path='about' element={<Base><About/></Base>} />
          <Route path='events' element= {<Base><Event/></Base>} />
          <Route path='event-single/:id' element={<Base><EventSingle/></Base>} />
          <Route path='blogs' element={<Base><Blogs/></Base>} />
          <Route path='blog-details/:id' element={<Base><BlogDetails/></Base>} />
          <Route path='contact' element={<Base><Contact/></Base>} />








          <Route path='*' element={<PageNotFound404 />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
