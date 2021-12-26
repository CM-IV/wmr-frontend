import { Fragment } from "preact";
import { Menu } from "./menu";
import { useState, useEffect } from "preact/hooks";

const Dashboard = () => {
  const [bookNum, setBookNum] = useState(0);

  const books = () => {
    const fetchData = fetch(`${process.env.API_URL}/books`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
    });
    fetchData
      .then((res) => {
        return res.json();
      })
      .then((books) => {
        //console.log(books);

        setBookNum(books.meta.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    books();
  }, []);

  return (
    <Fragment>
      <section class="section">
        <div className="columns">
          <div class="column is-3">
            <Menu />
          </div>

          <div class="column is-9">
            <section class="hero is-info">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">Hello, Admin.</h1>
                </div>
              </div>
            </section>
            <section class="section">
              <div class="tile is-ancestor has-text-centered">
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">{bookNum}</p>
                    <p class="subtitle">Books</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">4</p>
                    <p class="subtitle">Projects</p>
                  </article>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export { Dashboard };
