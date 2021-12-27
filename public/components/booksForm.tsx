// import { useEffect, useState } from "preact/hooks";
import { Link } from "wouter-preact";
import { useState, useEffect } from "preact/hooks";
import { Paginator } from "./paginator";

const BooksForm = () => {
  const [booksData, setBooksData] = useState<Books[]>([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [isPaginated, setIsPaginated] = useState(0);

  const token = localStorage.getItem("token");

  const fetchBooks = () => {
    const fetchData = fetch(`${process.env.API_URL}/books/?page=${page}`, {
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

        setBooksData(books.data);
        setIsPaginated(books.meta.total);
        setLastPage(books.meta.last_page);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchBooks();
  }, [page]);

  const deleteRow = async (id: number) => {
    if (window.confirm("Are you sure?")) {
      await fetch(`${process.env.API_URL}/books/${id}`, {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setBooksData(booksData.filter((p: Books) => p.id !== id));
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
              <th>Author</th>
              <th>Publisher</th>
              <th>Image</th>
              <th>Description</th>
              <th>Publish Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {booksData.map((b: Books) => {
              return (
                <tr key={b.id}>
                  <td>{b.id}</td>
                  <td>{b.title}</td>
                  <td>{b.author}</td>
                  <td>{b.publisher}</td>
                  <td>{b.image}</td>
                  <td>{b.description}</td>
                  <td>{b.publish_year}</td>
                  <td>
                    <div class="level">
                      <div class="level-item">
                        <Link
                          to={`/manage-books/${b.id}/edit`}
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

export { BooksForm };
