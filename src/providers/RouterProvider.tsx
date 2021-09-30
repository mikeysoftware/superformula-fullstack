import { BrowserRouter, Switch, Route } from "react-router-dom";

// Views
import UsersPage from "../views/UsersPage";

export default function RouterProvider() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <UsersPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
