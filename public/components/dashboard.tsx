import { Fragment } from "preact";
import { Menu } from "./menu";

const Dashboard = () => {
  return (
    <Fragment>
      <section class="section">
        <div className="columns">
          <div class="column is-3">
            <Menu />
          </div>

          <div class="column is-9">
            <h1>Welcome to the Dashboard!</h1>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export { Dashboard };
