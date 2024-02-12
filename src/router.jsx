import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import RickyMorty from "./pages/Portfolio/RickyMortyApp/RickyMorty";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import Character from "./pages/Portfolio/RickyMortyApp/Character";
import TodoProject from "./pages/Portfolio/TodoApp/TodoProject";
import Calendar from "./pages/Portfolio/Calendar/Calendar";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <Error /> },
      {
        path: "/portfolio",
        children: [
          {
            index: true,
            element: <Portfolio />,
          },
          {
            path: "ricky-morty",
            children: [
              {
                index: true,
                element: <RickyMorty />,
                loader: ({ request: { signal } }) => {
                  return fetch(`https://rickandmortyapi.com/api/character`, {
                    signal,
                  });
                },
              },
              {
                path: ":charId",
                loader: async ({ params }) => {
                  return fetch(
                    `https://rickandmortyapi.com/api/character/${params.charId}`
                  );
                },
                element: <Character />,
              },
            ],
          },
          {
            path: "todo-app",
            element: <TodoProject />,
          },
          {
            path: "calendar",
            element: <Calendar />,
          },
        ],
      },
    ],
  },
]);
