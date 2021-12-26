import { Fragment } from "preact";
import { Link } from "wouter-preact";
import { useState } from "preact/hooks";

const Nav = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = Boolean(localStorage.getItem("token"));

  if (token) {
    setIsAuthenticated(true);
  }
  return (
    <Fragment>
      <nav
        class="navbar"
        id="nav"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="image is-48x48 mt-1" href="/">
            <img
              src="https://ik.imagekit.io/xbkhabiqcy9/img/Occident_Tech_logo_wyOOeI6Bhcn.png?updatedAt=1637081403933"
              height="48"
              width="48"
              class="image-responsive"
              alt="logo"
            />
          </a>
        </div>

        <div id="navMenu" class="navbar-menu is-active">
          <div class="navbar-start">
            <Link to={"/"} class="navbar-item">
              Home
            </Link>
            <Link to={"/about"} class="navbar-item">
              About
            </Link>
            <Link to={"/products"} class="navbar-item">
              Products
            </Link>
            {isAuthenticated && (
              <Link to={"/dashboard"} class="navbar-item">
                Dashboard
              </Link>
            )}
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                {!isAuthenticated && (
                  <Link to={"/login"} class="button is-link">
                    Admin Login
                  </Link>
                )}
                {isAuthenticated && (
                  <Link to={"/logout"} class="button is-warning">
                    Logout
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export { Nav };
