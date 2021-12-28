import { Wrapper } from "./wrapper";
import { useState, useEffect } from "preact/hooks";
import { useLocation } from "wouter-preact";

const EditPreviews = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [location, _setLocation] = useLocation();
  let id: string;

  const token = localStorage.getItem("token");

  let currentUrl = location;

  console.log(currentUrl);

  id = currentUrl.split("/")[2].substring(0, 36);

  const getPreview = () => {
    const fetchData = fetch(`${process.env.WMR_API_URL}/previews/${id}`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
    });
    fetchData
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((preview) => {
        setTitle(preview.title);
        setImage(preview.image);
        setUrl(preview.url);
        // console.log(book);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getPreview();
  }, []);

  const submit = (e: Event) => {
    e.preventDefault();

    alert("Preview updated!");

    const previewData = {
      title,
      image,
      url,
    };

    const updatePreview = fetch(`${process.env.WMR_API_URL}/previews/${id}`, {
      method: "PUT",
      credentials: "same-origin",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(previewData),
    });
    updatePreview
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <section class="section">
        <p class="subtitle">Update a project preview</p>
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
            <label class="label">URL</label>
            <div class="control">
              <input
                class="input"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.currentTarget.value)}
              />
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

export { EditPreviews };
