import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Articles = lazy(() => import("./pages/Articles.jsx"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Suspense
          fallback={<div className="p-10 text-slate-400">Loading...</div>}
        >
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              }
            />
            <Route
              path="/articles"
              element={
                <PageTransition>
                  <Articles />
                </PageTransition>
              }
            />
            <Route
              path="/articles/:slug"
              element={
                <PageTransition>
                  <ArticleDetail />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </Layout>
  );
}
