import { Layout } from "../layouts/layout";
import { Books } from "../components/books";

const BooksPage = () => {
  return (
    <Layout>
      <section class="section">
        <h1 class="title">Books page</h1>
      </section>
      <section class="section">
        <Books />
      </section>
    </Layout>
  );
};

export { BooksPage };
