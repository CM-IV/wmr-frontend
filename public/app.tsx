import { Route, Switch } from "wouter-preact";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { LoginPage } from "./pages/loginPage";
import { LogoutPage } from "./pages/logoutPage";
import { DashboardPage } from "./pages/dashboardPage";
import { BooksPage } from "./pages/booksPage";
import { ManageBooks } from "./pages/manageBooks";
import { ProtectedRoute } from "./components/protectedRoute";
import { NotFound } from "./pages/_404";

const App = () => {
  return (
    <div class="app">
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/books" component={BooksPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <ProtectedRoute path="/logout" component={LogoutPage}></ProtectedRoute>
        <ProtectedRoute
          path="/dashboard"
          component={DashboardPage}
        ></ProtectedRoute>
        <ProtectedRoute
          path="/manage-books"
          component={ManageBooks}
        ></ProtectedRoute>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
};

export { App };
