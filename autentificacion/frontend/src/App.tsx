import "./App.css";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../../../src/pages/Dashboard";
import CreateEvent from "../../../src/pages/CreateEvent";
import EventsCategories from "../../../src/pages/EventCategories";
import EventDetails from "../../../src/pages/EventDetails";
import * as reactRouterDom from "react-router-dom";
import Home from "./Home";
import EmailPassword from "supertokens-auth-react/lib/build/recipe/emailpassword/recipe";
import Session from "supertokens-auth-react/lib/build/recipe/session/recipe";
import { EmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/emailpassword/prebuiltui";

SuperTokens.init({
  appInfo: {
    appName: "meetup-clone",
    apiDomain: "http://localhost:4000",
    websiteDomain: "http://localhost:5173",
    apiBasePath: "/auth",
    websiteBasePath: "/",
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

function App() {
  return (
    <SuperTokensWrapper>
      <Router>
        <Routes>
          {/* This shows the login UI on "/auth" route */}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [
            EmailPasswordPreBuiltUI,
          ])}

          <Route
            path="/"
            element={
              <SessionAuth>
                <Home />
              </SessionAuth>
            }
          />
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <SessionAuth>
                <Dashboard />
              </SessionAuth>
            }
          />
          <Route
            path="/events/:category"
            element={
              <SessionAuth>
                <EventsCategories />
              </SessionAuth>
            }
          />
          <Route
            path="/create/event"
            element={
              <SessionAuth>
                <CreateEvent />
              </SessionAuth>
            }
          />
          <Route
            path="/events/:slug"
            element={
              <SessionAuth>
                <EventDetails />
              </SessionAuth>
            }
          />
        </Routes>
      </Router>
    </SuperTokensWrapper>
  );
}

export default App;
