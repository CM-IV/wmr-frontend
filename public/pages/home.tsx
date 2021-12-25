import { Layout } from "../layouts/layout";

const Home = () => {
  const token = localStorage.getItem("token");
  console.log(token);

  return (
    <Layout>
      <section class="section">
        <h1 class="title">Home page</h1>
        <p>
          Welcome to the Occidental Technologies full stack web app. Here I can
          show you any books I'm writing or reading through. I also have a
          website showcase for all the previous websites I have made.
        </p>
      </section>

      <section class="section">
        <figure class="image is-2by1">
          <img
            src="https://ik.imagekit.io/xbkhabiqcy9/tr:w-1248,h-624/img/modern-art_-7xRarZND.webp?updatedAt=1637081405284"
            alt="Home page image"
          />
        </figure>
      </section>
    </Layout>
  );
};

export { Home };
