import { Fragment } from "react";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import CurrentCourses from "./components/CurrentCourses";
import AddCourse from "./components/AddCourse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/currentCourses" element={<CurrentCourses />}></Route>
          <Route path="/addCourse" element={<AddCourse />}></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
