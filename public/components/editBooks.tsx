import { Wrapper } from "./wrapper";
import { useState, useEffect } from "preact/hooks";
import { useLocation } from "wouter-preact";

const EditBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [location, _setLocation] = useLocation();
  let id: string;

  const token = localStorage.getItem("token");

  let url = location;

  console.log(url);

  id = url.split("/")[2].substring(0, 36);

  const getBook = () => {
    const fetchData = fetch(`${process.env.WMR_API_URL}/books/${id}`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
    });
    fetchData
      .then((res) => {
        return res.json();
      })
      .then((book) => {
        setTitle(book.title);
        setAuthor(book.author);
        setPublisher(book.publisher);
        setImage(book.image);
        setDescription(book.description);
        // console.log(book);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBook();
  }, []);

  const submit = (e: Event) => {
    e.preventDefault();

    alert("Book updated!");
    const bookData = {
      title,
      author,
      publisher,
      image,
      description,
    };

    const updateBook = fetch(`${process.env.WMR_API_URL}/books/${id}`, {
      method: "PUT",
      credentials: "same-origin",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });
    updateBook
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Wrapper>
      <section class="section">
        <p class="subtitle">Update a book</p>
        <form onSubmit={submit}>
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input
                class="input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Author</label>
            <div class="control">
              <input
                class="input"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.currentTarget.value)}
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Publisher</label>
            <div class="control">
              <input
                class="input"
                type="text"
                value={publisher}
                onChange={(e) => setPublisher(e.currentTarget.value)}
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Image</label>
            <div class="control">
              <input
                class="input"
                type="url"
                value={image}
                onChange={(e) => setImage(e.currentTarget.value)}
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="New Book Description"
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
              ></textarea>
            </div>
          </div>
          <button class="button is-primary" type="submit">
            Save
          </button>
        </form>
      </section>
    </Wrapper>
  );
};

export { EditBooks };
