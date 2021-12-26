import { Layout } from "../layouts/layout";

const About = () => {
  return (
    <Layout>
      <section class="section">
        <h1 class="title">About page</h1>
        <p>
          This web app will demo the various books that I am selling and/or
          reading. There is also a projects showcase that shows off the various
          websites I have made.
        </p>
      </section>

      <section class="section">
        <figure class="image is-2by1">
          <img
            src="https://ik.imagekit.io/xbkhabiqcy9/tr:w-1248,h-624/img/woods_7_1ezMKyk.webp?updatedAt=1637081404066"
            alt="Home page image"
          />
        </figure>
      </section>
    </Layout>
  );
};

export { About };
