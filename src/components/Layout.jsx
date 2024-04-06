import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./login/Home";
import Login from "./login/Login";
import Profile from "./profile/Layout";
import Connections from "./connections/Layout";
import Dashboard from "./login/DashBoard";
import MonkeyWhackBlitz from "./games/Game";
import Onboarding from "./onboarding/Layout";
import OnboardingHeader from "./onboarding/onboardingHeader";
import Footer from "./footer/footer";

const RequireAuth = ({ children }) => {
  const isLoggedIn = localStorage.getItem("userId") !== null;
  return isLoggedIn ? children : <Navigate to="/login" />;
};

function Layout() {
  const isLoggedIn = localStorage.getItem("userId") !== null;
  const isOnboarded = localStorage.getItem("onboarded");

  return (
    <>
      <div className="flex flex-col min-h-screen p-0">
        <Router>
          {isLoggedIn && isOnboarded && <Dashboard />}
          {!isOnboarded && <OnboardingHeader />}
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route
              path="/connections"
              element={
                <RequireAuth>
                  <Connections />
                </RequireAuth>
              }
            />
            <Route
              path="/play"
              element={
                <RequireAuth>
                  <MonkeyWhackBlitz />
                </RequireAuth>
              }
            />
            <Route path="/onboarding" element={<Onboarding />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
