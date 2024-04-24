import { Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/HomePage/HomePage";
import MoviesPage from "./components/pages/MoviesPage/MoviesPage";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";

import "./App.css";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        {/* <Route path="/movies/:movieId" element={<MoviesDetailsPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
