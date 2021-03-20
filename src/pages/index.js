import React from 'react';
import {
  Layout,
  //SEO,
  //HomepageCollectionsGrid,
  //FeaturedProducts,
} from 'components';
//import ProductContext from 'context/ProductContext';

const IndexPage = () => {
 // const { collections } = React.useContext(ProductContext);

  return (
<Layout>
        <main className="max-w-screen-2xl">
        <div className="head w-10/12   m-auto md:max-w-screen-lg">
          <img className="mb-10 block w-4/6 m-auto" alt="accueil" src="accueil.svg"/>
          <h2 className=" text-4xl text-left mb-5">Notre concept</h2>
          <p className=" text-left mb-5">
            Aenean maximus lorem vitae auctor ullamcorper. Aliquam cursus
            fermentum rhoncus. Aenean interdum n risus a iaculis. In placerat
            dolor purus, nec suscipit est iaculis at. Pellentesque nec nisl
            risus. Nullam quis felis vel urna viverra mollis ac nec felis. In
            scelerisque ante non vehicula auctor.
          </p>
          <p className="text-left mb-10">
            Aenean maximus lorem vitae auctor ullamcorper. Aliquam cursus
            fermentum rhoncus. Aenean interdum n risus a iaculis. In placerat
            dolor purus, nec suscipit est iaculis at. Pellentesque nec nisl
            risus. Nullam quis felis vel urna viverra mollis ac nec felis. In
            scelerisque ante non vehicula auctor.
          </p>
        </div>
        <div className="content">
          <section className="flex justify-center mb-10 max-w-max  flex-wrap">
            <article className=" md:w-1/2 md: mb-0 m-auto w-12/12 mb-3">
              <div className="concept-boutique  p-10  mb-5">
                <h3 className="font-bold text-2xl text-left mb-5"> boutique</h3>
                <p className="p-2 text-left mb-3">
                  Aenean maximus lorem vitae auctor ullamcorper. Aliquam cursus
                  fermentum rhoncus. Aenean interdum in risus a iaculis. In
                  placerat dolor purus, nec suscipit est iaculis at.
                  Pellentesque nec nisl risus. Nullam quis felis vel urna
                  viverra mollis ac nec felis. In scelerisque ante non vehicula
                  auctor.{" "}
                </p>
              </div>
              <button
                className="  block m-auto p-2  w-auto  text-center boutique rounded-xl text-white "
                name="button"
                type="button"
              >
                Boutique
              </button>
            </article>
            <article className=" md:w-1/2 md: mb-0 m-auto w-12/12 mb-3">
              <div className="concept-atelier p-10  mb-5">
                <h3 className="font-bold text-2xl text-left mb-5">
                  {" "}
                  Ateliers/formations{" "}
                </h3>
                <p className="p-2 text-left mb-3">
                  Aenean maximus lorem vitae auctor ullamcorper. Aliquam cursus
                  fermentum rhoncus. Aenean interdum in risus a iaculis. In
                  placerat dolor purus, nec suscipit est iaculis at.
                  Pellentesque nec nisl risus. Nullam quis felis vel urna
                  viverra mollis ac nec felis. In scelerisque ante non vehicula
                  auctor.{" "}
                </p>
              </div>
              <button
                className="   block m-auto p-2  w-auto  text-center atelier rounded-xl text-white w-16"
                name="button"
                type="button"
              >
                Ateliers
              </button>
            </article>
          </section>

          <h2 className=" text-4xl text-center mb-10">nos valeurs</h2>
          <section className="flex justify-center flex-wrap mb-20">
            <article className="md:w-1/4 md: mb-0 m-auto w-10/12 mb-3">
              <img
                className="mb-3 block m-auto valeur rounded-full"
                src="valeur-un.jpg" alt="valeur-1"
              />
              <h3 className="font-bold text-2xl mb-5 text-center">
                {" "}
                lorem ipsum{" "}
              </h3>
              <p className="p-2 text-center mb-3">
                Aenean maximus lorem vitae auctor ullamcorper. Aliquam cursus
                fermentum rhoncus. Aenean interdum in risus a iaculis. In
                placerat dolor purus, nec suscipit est iaculis at. Pellentesque
                nec nisl risus. Nullam quis felis vel urna viverra mollis ac nec
                felis. In scelerisque ante non vehicula auctor.{" "}
              </p>
              <button
                className="   block m-auto p-2  w-auto  text-center valeur rounded-xl text-white w-16"
                name="button"
                type="button"
              >
                                En savoir plus

              </button>
            </article>
            <article className="md:w-1/4 md: mb-0 m-auto w-10/12 mb-3">
              <img
                className="mb-3 block m-auto valeur rounded-full"
                src="valeur-deux.jpg " alt="valeurs"
              />
              <h3 className="font-bold text-2xl mb-5 text-center">
                {" "}
                lorem ipsum{" "}
              </h3>
              <p className="p-2 text-center mb-3">
                Aenean maximus lorem vitae auctor ullamcorper. Aliquam cursus
                fermentum rhoncus. Aenean interdum in risus a iaculis. In
                placerat dolor purus, nec suscipit est iaculis at. Pellentesque
                nec nisl risus. Nullam quis felis vel urna viverra mollis ac nec
                felis. In scelerisque ante non vehicula auctor.{" "}
              </p>
              <button
                className="   block m-auto p-2  w-auto  text-center valeur rounded-xl text-white w-16"
                name="button"
                type="button"
              >
                                En savoir plus

              </button>
            </article>
            <article className="md:w-1/4 md: mb-0 m-auto w-10/12 mb-3">
              <img
                className="mb-3 block m-auto valeur rounded-full"
                src="valeur-trois.jpg" alt="valeur-trois"
              />
              <h3 className="font-bold text-2xl mb-5 text-center">
                {" "}
                lorem ipsum{" "}
              </h3>
              <p className="p-2 text-center mb-3">
                Aenean maximus lorem vitae auctor ullamcorper. Aliquam cursus
                fermentum rhoncus. Aenean interdum in risus a iaculis. In
                placerat dolor purus, nec suscipit est iaculis at. Pellentesque
                nec nisl risus. Nullam quis felis vel urna viverra mollis ac nec
                felis. In scelerisque ante non vehicula auctor.{" "}
              </p>
              <button
                className="   block m-auto p-2  w-auto  text-center valeur rounded-xl text-white w-16"
                name="button"
                type="button"
              >
                En savoir plus
              </button>
            </article>
          </section>
        </div>
      </main>
</Layout>  );
};

export default IndexPage;
