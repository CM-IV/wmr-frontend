import { Layout } from "../layouts/layout";
import { EditPreviews } from "../components/editPreviews";

const EditPreviewsPage = () => {
  return (
    <Layout>
      <section class="section">
        <h1 class="title">Edit a Project Preview by ID</h1>
      </section>
      <EditPreviews />
    </Layout>
  );
};

export { EditPreviewsPage };
