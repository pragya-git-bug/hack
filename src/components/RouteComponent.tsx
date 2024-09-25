import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import StudentDashboard from "./dashboard/StudentDashboard";
import AuthPage from "./auth/AuthPage";
import CodeWorkspace from "./workspace/CodeWorkspace";
import { problem } from "@/lib/data";

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<AuthPage />} />
        <Route
          path={"/dashboard"}
          element={
            // <RequireAuth fallbackPath={"/"}>
              <StudentDashboard />
            // </RequireAuth>
          }
        />
        <Route
          path="/workspace"
          element={
            // <RequireAuth fallbackPath={"/"}>
              <CodeWorkspace problem={problem} />
            // </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;
