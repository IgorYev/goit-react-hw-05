import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/pages/HomePage/HomePage";
import MoviesPage from "./components/pages/MoviesPage/MoviesPage";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";

import "./App.css";

export default function App() {
  return (
    <Navigation>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Navigation>
  );
}
