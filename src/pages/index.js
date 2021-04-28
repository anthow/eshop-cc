import React from 'react';
import { graphql } from "gatsby"
import {
  Layout,
  //SEO,
  //HomepageCollectionsGrid,
  //FeaturedProducts,
} from 'components';
//import ProductContext from 'context/ProductContext';

 // const { collections } = React.useContext(ProductContext);
 const IndexPage = ({ data }) => 
<Layout>
        <main>
        <div className="head w-10/12   m-auto mt-10 md: mt-0 py-10 md:max-w-screen-lg">
          <img className="mb-10 hidden md:block w-6/6 md:w-4/6 m-auto" alt="accueil" src={data.datoCmsPageDAccueil.imageConcept.url}/>
          <img className="mb-10 md:hidden block w-6/6 md:w-4/6 m-auto" alt="accueil" src={data.datoCmsPageDAccueil.imageConceptSmartphone.url}/>
          <h2 className=" italic text-4xl text-left mb-5">Notre concept</h2>
          <p className="text-left mb-10">
            {data.datoCmsPageDAccueil.texteConcept}
          </p>
        </div>
        <div className="content">
          <section className="flex justify-center mb-10 max-w-max  flex-wrap">
            <article className="  md:w-1/2 md: mb-0 m-auto w-12/12 mb-3">
              <div className="concept-boutique  p-10  mb-5">
                <h3 className=" italic font-bold text-2xl text-left mb-5"> boutique</h3>
                <p className="p-2 text-left mb-3">
                {data.datoCmsPageDAccueil.texteBoutique}

                </p>
                <button
                className=" italic block m-auto p-2  w-auto  text-center boutique rounded-xl text-white "
                name="button"
                type="button"
              >
                Boutique
              </button>
              </div>
         
            </article>
            <article className=" md:w-1/2 md: mb-0 m-auto w-12/12 mb-3">
              <div className="concept-atelier p-10  mb-5">
                <h3 className=" italic font-bold text-2xl text-left mb-5">
                  {" "}
                  Ateliers/formations{" "}
                </h3>
                <p className="p-2 text-left mb-3">
                {data.datoCmsPageDAccueil.textesAteliers}

                </p>
                <button
                className="  italic block m-auto p-2  w-auto  text-center atelier rounded-xl text-white w-16"
                name="button"
                type="button"
              >
                Ateliers
              </button>
              </div>
              
            </article>
          </section>

          <h2 className="  italic text-4xl text-center mb-10">nos valeurs</h2>
          <section className="flex justify-center flex-wrap mb-20">
            <article className="md:w-1/4 md: mb-0 m-auto w-10/12 mb-3">
              <img
                className="mb-3 block m-auto valeur rounded-full"
                src={data.datoCmsPageDAccueil.imagev1.url}  alt="valeur-1"
              />
              <h3 className=" italic font-bold text-2xl mb-5 text-center">
              {data.datoCmsPageDAccueil.titrev1}

              </h3>
              <p className="p-2 text-center mb-3">
              {data.datoCmsPageDAccueil.textev1}

              </p>
            </article>
            <article className="md:w-1/4 md: mb-0 m-auto w-10/12 mb-3">
              <img
                className="mb-3 block m-auto valeur rounded-full"
                src={data.datoCmsPageDAccueil.imageV2.url} alt="valeurs"
              />
              <h3 className=" italic font-bold text-2xl mb-5 text-center">
              {data.datoCmsPageDAccueil.titrev2}

              </h3>
              <p className="p-2 text-center mb-3">
              {data.datoCmsPageDAccueil.texteV2}

              </p>
            
            </article>
            <article className="md:w-1/4 md: mb-0 m-auto w-10/12 mb-3">
              <img
                className="mb-3 block m-auto valeur rounded-full"
                src={data.datoCmsPageDAccueil.imageV3.url} alt="valeur-trois"
              />
              <h3 className=" italic font-bold text-2xl mb-5 text-center">
              {data.datoCmsPageDAccueil.titrev3}

              </h3>
              <p className="p-2 text-center mb-3">
              {data.datoCmsPageDAccueil.texteV3}

              </p>
            </article>
          </section>
        </div>
      </main>
</Layout> 
export const query = graphql`
{
  datoCmsPageDAccueil {
    texteBoutique
    texteConcept
    textesAteliers
    titrev1
    titrev2
    titrev3
    imagev1 {
      fluid {
        base64
        tracedSVG
        width
        height
      }
    }
    imageConcept {
      alt
      author
      basename
      blurhash
      copyright
      customData
      createdAt
      fluid {
        aspectRatio
        base64
        sizes
        height
        src
        srcSet
        tracedSVG
        width
      }
      url
    }
    imageConceptSmartphone {
      alt
      author
      basename
      blurhash
      copyright
      customData
      createdAt
      fluid {
        aspectRatio
        base64
        sizes
        height
        src
        srcSet
        tracedSVG
        width
      }
      url
    }
    imagev1 {
      alt
      author
      basename
      blurhash
      copyright
      customData
      createdAt
      fluid {
        aspectRatio
        base64
        sizes
        height
        src
        srcSet
        tracedSVG
        width
      }
      url
    }
    imageV2 {
      size
      width
      height
      path
      format
      isImage
      notes
      author
      copyright
      filename
      basename
      exifInfo
      mimeType
      blurhash
      originalId
      url
      createdAt
      gatsbyImageData
      alt
      title
      customData
    }
    imageV3 {
      size
      width
      height
      path
      format
      isImage
      notes
      author
      copyright
      filename
      basename
      exifInfo
      mimeType
      blurhash
      originalId
      url
      createdAt
      gatsbyImageData
      alt
      title
      customData
    }
    texteV2
    texteV3
    textev1
  }
}
`


export default IndexPage;
