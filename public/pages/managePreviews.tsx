import { Layout } from "../layouts/layout";
import { AddPreviews } from "../components/addPreviews";
import { PreviewsForm } from "../components/previewsForm";

const ManagePreviews = () => {
  return (
    <Layout>
      <section class="section">
        <h1 class="title">Manage Previews</h1>
      </section>
      <PreviewsForm />
      <AddPreviews />
    </Layout>
  );
};

export { ManagePreviews };
