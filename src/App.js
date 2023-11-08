import React from "react";
import "./App.css";
import HeaderComponent from "./components/headerComponents";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import TopicPage from "./pages/topicPage";
import NotFoundPage from "./pages/notFound";
import { APP_ROUTER } from "./constants/appRouter";
import SinglePage from "./pages/singerPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponent />

        <Routes>
          <Route path={APP_ROUTER.HOME} element={<HomePage />} />
          <Route path={APP_ROUTER.ABOUT} element={<AboutPage />} />
          <Route path={APP_ROUTER.TOPIC} element={<TopicPage />} />
          <Route path={APP_ROUTER.SINGER_DETAIL} element={<SinglePage />} />
          <Route path={APP_ROUTER.NOT_FOUND} element={<NotFoundPage />} />
          <Route path="/" element={<Navigate to={APP_ROUTER.HOME} replace />} />
          <Route path="*" element={<Navigate to={APP_ROUTER.NOT_FOUND} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
