import { Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Paginator } from "./paginator";

const Books = () => {
  const [bookData, setBookData] = useState<Books[]>([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  const books = () => {
    const fetchData = fetch(`${process.env.API_URL}/books?page=${page}`, {
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

        setBookData(books.data);
        setLastPage(books.meta.last_page);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    books();
  }, [page]);

  return (
    <Fragment>
      <section class="section">
        <h2 class="subtitle">Books:</h2>
        {bookData.map((sortedBooks) => {
          return (
            <div class="box" key={sortedBooks.id}>
              <p>{sortedBooks.title}</p>
            </div>
          );
        })}
        <Paginator
          page={page}
          lastPage={lastPage}
          pageChanged={(page) => setPage(page)}
        />
      </section>
    </Fragment>
  );
};

export { Books };
