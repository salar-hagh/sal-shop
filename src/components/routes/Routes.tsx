import { Route, Routes as RRoutes } from "react-router-dom";
import { routes } from "./routes.const";

function Routes() {
  return (
    <RRoutes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </RRoutes>
  );
}

export default Routes;
