import { Fragment } from "preact";
import { Link } from "wouter-preact";

const Logout = () => {
  const token = localStorage.getItem("token");

  const submit = () => {
    const logoutPost = fetch(`${process.env.API_URL}/logout`, {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    logoutPost
      .then((res) => {
        localStorage.clear();
        return res.json();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Fragment>
      <div class="columns is-centered">
        <div class="column is-half">
          <section class="section">
            <Link to={"/"} class="button">
              Go Back
            </Link>
          </section>
          <div class="box">
            <p class="title">Are you sure?</p>
            <div class="field">
              <div class="control">
                <Link to={"/login"} onClick={submit} class="button">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { Logout };
