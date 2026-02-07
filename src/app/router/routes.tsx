import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { publicRoutes } from "./routes.config";

export const AppRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};
