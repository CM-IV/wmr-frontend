// import { useEffect, useState } from "preact/hooks";
import { Link } from "wouter-preact";
import { useState, useEffect } from "preact/hooks";
import { Paginator } from "./paginator";

const PreviewsForm = () => {
  const [previewsData, setPreviewsData] = useState<Previews[]>([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [isPaginated, setIsPaginated] = useState(0);

  const token = localStorage.getItem("token");

  const fetchPreviews = () => {
    const fetchData = fetch(`${process.env.WMR_API_URL}/previews/?page=${page}`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
    });
    fetchData
      .then((res) => {
        return res.json();
      })
      .then((previews) => {
        //console.log(previews);

        setPreviewsData(previews.data);
        setIsPaginated(previews.meta.total);
        setLastPage(previews.meta.last_page);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPreviews();
  }, [page]);

  const deleteRow = async (id: number) => {
    if (window.confirm("Are you sure?")) {
      await fetch(`${process.env.WMR_API_URL}/previews/${id}`, {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setPreviewsData(previewsData.filter((p: Previews) => p.id !== id));
    }
  };

  return (
    <section class="section">
      <div class="table-container">
        <table class="table is-bordered">
          <thead>
            <tr>
              <th>ID#</th>
              <th>Title</th>
              <th>Image</th>
              <th>URL</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {previewsData.map((b: Previews) => {
              return (
                <tr key={b.id}>
                  <td>{b.id}</td>
                  <td>{b.title}</td>
                  <td>{b.image}</td>
                  <td>{b.url}</td>
                  <td>
                    <div class="level">
                      <div class="level-item">
                        <Link
                          to={`/manage-previews/${b.id}/edit`}
                          class="button is-small"
                        >
                          Edit
                        </Link>
                      </div>
                      <div class="level-item">
                        <button
                          class="button is-small"
                          onClick={() => deleteRow(b.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {isPaginated > 4 && (
        <Paginator
          page={page}
          lastPage={lastPage}
          pageChanged={(page) => setPage(page)}
        />
      )}
    </section>
  );
};

export { PreviewsForm };
