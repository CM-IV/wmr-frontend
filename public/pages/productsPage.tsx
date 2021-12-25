import { Layout } from "../layouts/layout";
import { Books } from "../components/books";

const ProductsPage = () => {
  return (
    <Layout>
      <section class="section">
        <h1 class="title">Products page</h1>
      </section>
      <Books />
    </Layout>
  );
};

export { ProductsPage };
