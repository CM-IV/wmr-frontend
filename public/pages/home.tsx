import { Layout } from "../layouts/layout";

const Home = () => {

  return (
    <Layout>
      <section class="section">
        <h1 class="title">Occident Software Systems</h1>
        <p>Welcome to the Occidental Technologies full stack web app.</p>
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
