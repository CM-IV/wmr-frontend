import { Layout } from "../layouts/layout";
import { EditBooks } from "../components/editBooks";

const EditBooksPage = () => {
  return (
    <Layout>
      <section class="section">
        <h1 class="title">Edit a Book by ID</h1>
      </section>
      <EditBooks />
    </Layout>
  );
};

export { EditBooksPage };
