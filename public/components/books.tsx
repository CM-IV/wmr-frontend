import { Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";

const Books = () => {
  const [bookData, setBookData] = useState<Books[]>([]);

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
        const sortedBooks = books.reverse();

        setBookData(sortedBooks);
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
      <h2 class="subtitle">Here are some book titles:</h2>
      {bookData.map((sortedBooks) => {
        return (
          <div class="box" key={sortedBooks.id}>
            <p>{sortedBooks.title}</p>
          </div>
        );
      })}
    </Fragment>
  );
};

export { Books };
