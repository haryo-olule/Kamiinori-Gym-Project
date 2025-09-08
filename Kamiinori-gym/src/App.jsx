// App.jsx
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  redirect,
} from "react-router-dom";

import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Service, { ServiceLoader } from "./Pages/Service";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";

// children for Service
import WorkEmpty from "./Pages/WorkEmpty";
import WorkDetails, { WorkDetailsLoader } from "./Pages/WorkDetails";
import Rootlayout from "./Layout/Rootlayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="service" element={<Service />} loader={ServiceLoader}>
        <Route index element={<WorkEmpty />} />
        <Route
          path="work/:id"
          element={<WorkDetails />}
          loader={WorkDetailsLoader}
        />
      </Route>
      <Route path="Product" element={<Product />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" loader={() => redirect("/")} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
