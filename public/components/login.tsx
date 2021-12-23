import { Fragment } from "preact";
import { useLocation } from "wouter-preact";
import { useState } from "preact/hooks";

const Login = () => {
  const [email, sendEmail] = useState("");
  const [password, sendPassword] = useState("");
  const [_location, setLocation] = useLocation();

  const submit = async (e: Event) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    const loginPost = fetch(`${process.env.API_URL}/login`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    loginPost
      .then((res) => {
        //console.log(res.json());
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        console.log(data.token);
        setLocation("/");
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
            <a href="/" class="button">
              Go Back
            </a>
          </section>
          <div class="box">
            <p class="title">Please Sign In</p>
            <form onSubmit={submit}>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    class="input"
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => sendEmail(e.currentTarget.value)}
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input
                    class="input"
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => sendPassword(e.currentTarget.value)}
                  />
                </div>
              </div>

              <div class="field">
                <div class="item">
                  <div class="loginButton">
                    <button class="button is-primary" type="submit">
                      Sign in
                    </button>
                  </div>
                </div>
              </div>

              <p>Don't have an account?</p>
              <p>
                <strong>Too fuckin' bad.</strong>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { Login };
