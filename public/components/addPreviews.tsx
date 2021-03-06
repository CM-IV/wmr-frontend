import { Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";

const AddPreviews = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [user, setUser] = useState(0);

  const token = localStorage.getItem("token");

  const getUser = () => {
    fetch(`${process.env.WMR_API_URL}/user`, {
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
        // localStorage.setItem("userId", data.user.id);
        const user = data.user.id;
        setUser(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const submit = (e: Event) => {
    e.preventDefault();

    alert("Your project preview was added!");

    const previewData = {
      title,
      image,
      url,
      assigned_to: user,
    };

    const addPreview = fetch(`${process.env.WMR_API_URL}/previews`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(previewData),
    });
    addPreview
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
        <div class="box">
          <p class="subtitle">Add a preview</p>
          <form onSubmit={submit}>
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Preview Title"
                  onChange={(e) => setTitle(e.currentTarget.value)}
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
                  placeholder="Preview Image"
                  onChange={(e) => setImage(e.currentTarget.value)}
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">URL Link</label>
              <div class="control">
                <input
                  class="input"
                  type="url"
                  placeholder="Preview URL Link"
                  onChange={(e) => setUrl(e.currentTarget.value)}
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
        </div>
      </section>
    </Fragment>
  );
};

export { AddPreviews };
