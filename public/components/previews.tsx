import { Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Paginator } from "./paginator";

const Previews = () => {
  const [previewData, setPreviewData] = useState<Previews[]>([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [isPaginated, setIsPaginated] = useState(0);

  const previews = () => {
    const fetchData = fetch(`${process.env.API_URL}/previews/?page=${page}`, {
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

        setPreviewData(previews.data);
        setIsPaginated(previews.meta.total);
        setLastPage(previews.meta.last_page);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    previews();
  }, [page]);

  return (
    <Fragment>
      <section class="section">
        <h2 class="subtitle">Projects:</h2>
        <div class="columns">
          {previewData.map((sortedPreviews) => {
            return (
              <div class="column">
                <a href={sortedPreviews.url}>
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-3by2">
                        <img src={sortedPreviews.image} alt="Preview image" />
                      </figure>
                    </div>
                    <div class="card-content">{sortedPreviews.title}</div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        {isPaginated > 4 && (
          <Paginator
            page={page}
            lastPage={lastPage}
            pageChanged={(page) => setPage(page)}
          />
        )}
      </section>
    </Fragment>
  );
};

export { Previews };
