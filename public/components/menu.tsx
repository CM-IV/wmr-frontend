import { Fragment } from "preact";
import { Link } from "wouter-preact";

const Menu = () => {
  return (
    <Fragment>
      <div class="box">
        <aside class="menu is-3">
          <p class="menu-label">Admin</p>
          <ul class="menu-list">
            <li>
              <Link to={"/manage-books"} id="menuButton" class="menu-item">
                Manage Books
              </Link>
            </li>
            <li>
              <Link to={"#"} id="menuButton" class="menu-item">
                Manage Previews
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </Fragment>
  );
};

export { Menu };
