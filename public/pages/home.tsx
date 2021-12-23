import { Layout } from "../layouts/layout";
import { Books } from "../components/books";

const Home = () => {
  const token = localStorage.getItem("token");

  console.log(token);

  return (
    <Layout>
      <h1 class="title">Home page</h1>
      <Books />
    </Layout>
  );
};

export { Home };
