import { Layout } from "../layouts/layout";
import { Previews } from "../components/previews";

const PreviewsPage = () => {
  return (
    <Layout>
      <section class="section">
        <h1 class="title">Projects page</h1>
      </section>
      <Previews />
    </Layout>
  );
};

export { PreviewsPage };
