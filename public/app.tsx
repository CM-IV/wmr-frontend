import { Route, Switch } from "wouter-preact";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { ContactPage } from "./pages/contactPage";
import { LoginPage } from "./pages/loginPage";
import { LogoutPage } from "./pages/logoutPage";
import { DashboardPage } from "./pages/dashboardPage";
import { ProductsPage } from "./pages/productsPage";
import { PreviewsPage } from "./pages/previewsPage";
import { ManageBooks } from "./pages/manageBooks";
import { EditBooksPage } from "./pages/editBooksPage";
import { ManagePreviews } from "./pages/managePreviews";
import { EditPreviewsPage } from "./pages/editPreviewsPage";
import { ProtectedRoute } from "./components/protectedRoute";
import { NotFound } from "./pages/_404";


const App = () => {
  return (
    <div class="app">
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route path="/products" component={ProductsPage}></Route>
        <Route path="/previews" component={PreviewsPage}></Route>
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
        <ProtectedRoute
          path="/manage-books/:id/edit"
          component={EditBooksPage}
        ></ProtectedRoute>
        <ProtectedRoute
          path="/manage-previews"
          component={ManagePreviews}
        ></ProtectedRoute>
        <ProtectedRoute
          path="/manage-previews/:id/edit"
          component={EditPreviewsPage}
        ></ProtectedRoute>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
};

export { App };
