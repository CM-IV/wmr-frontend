import { Layout } from "../layouts/layout";
import { AddBooks } from "../components/addBooks";
import { BooksForm } from "../components/booksForm";

const ManageBooks = () => {
  return (
    <Layout>
      <section class="section">
        <h1 class="title">Manage Books</h1>
      </section>
      <BooksForm />
      <AddBooks />
    </Layout>
  );
};

export { ManageBooks };
