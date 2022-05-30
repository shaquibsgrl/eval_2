import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { PrivateRoute } from "./PrivateRoute";
import { RegisterOne } from "./RegisterPageOne";
import { RegisterTwo } from "./RegisterPageTwo";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route
          path="/register/one"
          element={
            <PrivateRoute>
              <RegisterOne />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/register/two" element={<RegisterTwo />}></Route>
      </Routes>
    </div>
  );
};
