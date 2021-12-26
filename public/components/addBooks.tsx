import { Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [publish_year, setPublishYear] = useState("");

  const token = localStorage.getItem("token");

  const getUser = () => {
    fetch(`${process.env.API_URL}/user`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("userId", data.user.id);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const submit = () => {
    alert("Your book was added!");

    const userId = localStorage.getItem("userId");

    parseInt(publish_year);

    const bookData = {
      title,
      author,
      publisher,
      image,
      description,
      assigned_to: userId,
      publish_year,
    };

    const addBook = fetch(`${process.env.API_URL}/books`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });
    addBook
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Fragment>
      <section class="section">
        <h1 class="title">Manage Books</h1>
      </section>
      <section class="section">
        <p class="subtitle">Add a book</p>
        <form onSubmit={submit}>
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Book Title"
                onChange={(e) => setTitle(e.currentTarget.value)}
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Author</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Book Author"
                onChange={(e) => setAuthor(e.currentTarget.value)}
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Publisher</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Book Publisher"
                onChange={(e) => setPublisher(e.currentTarget.value)}
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Image</label>
            <div class="control">
              <input
                class="input"
                type="url"
                placeholder="Book Image"
                onChange={(e) => setImage(e.currentTarget.value)}
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Book Description"
                onChange={(e) => setDescription(e.currentTarget.value)}
                required
              ></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">Publish Year</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Book Publish Year"
                onChange={(e) => setPublishYear(e.currentTarget.value)}
                required
              />
            </div>
          </div>

          <div class="field">
            <div class="loginButton">
              <button class="button is-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export { AddBooks };
