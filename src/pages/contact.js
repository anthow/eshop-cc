import React from 'react';
import { Layout } from '../components/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <section className="flex flex-col justify-center items-start  flex-wrap md:w-full contact-shadow">

        <img className="mb-10 mt-10 block w-1/2 md:w-1/6 m-auto" alt="contact" src="logo-seul.svg" />

        <div className="contact-form w-5/6 mb-20 w-max m-auto  md:w-full  ">
        <h2 className="font-bold text-2xl text-center  mb-10">
          Formulaire de contact
          </h2>
          <form className="contact-form w-5/6 mb-20 w-max m-auto   " method="post" action="#">
            <div className="form-name m-auto">
              <label className="block  m-auto sm:inline-block mr-5  mb-3 block">
                <input
                  type="text"
                  className="border p-1"
                  name="prenom"
                  id="prenom"
                  placeholder="Prénom"
                />
              </label>

              <label className="  sm:inline-block mr-5  mb-3 block">
                <input className="border p-1 " placeholder="nom"
                  type="text" name="nom" id="nom" />
              </label>
            </div>
            <div className="form-name">
              <label className=" sm:inline-block mr-5  mb-3 block">
                <input
                  className="border p-1"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"

                />
              </label>
              <label className="  inline-block mb-3 block ">
                <input
                  className="border p-1"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Sujet"

                />
              </label>
            </div>
            <label className="block">
              <textarea
                className=" w-max md:w-12/12  md:m-auto block mb-3 border p-2"
                name="message"
                id="message"
                rows="5"
                placeholder="votre message"

              />
            </label>

            <button
              className="  block mt-2  p-2  w-auto m-auto  text-center valeur rounded-full text-white "
              name="button"
              type="button"
            >
              Envoyer
              </button>
          </form>
        </div>
      </section>
      <section className="flex justify-center items-start  flex-wrap md:w-full  mt-10 mb-10">
      <article className=" md:w-5/12 mb-0 mx-5 ">
      <h2 className="font-bold text-2xl text-left mt-20 md:mt-0 ">
              Informations de contact
            </h2>
          <h3 className="font-bold text-xl text-left mb-2">
              Nom de l'entreprise
            </h3>
          <p>adresse 1</p>
          <p>cp</p>
          <p>ville</p>
          <p> numéro de téléphone</p>
          <p>adresse mail</p>
          <p>numéro d'entreprise</p>
          <p>numéro de compte en banque</p>
        </article>
        <article className=" md:w-5/12 mb-0 mx-5">
          <h2 className="font-bold text-2xl text-center mt-20 md:mt-0 ">

            Réseaux sociaux
            </h2>
          <div className="flex items-center justify-center mb-10">
            <img className=" block w-40" alt="Coccinelles et compagnies" src="logo-titres.svg" />
            <a href="https://www.facebook.com">
              <img className=" block w-8" alt="facebook" src="facebook.svg" />

            </a>

          </div>

          <div className="flex items-center justify-evenly">
            <div className=" flex flex-col">
              <img className=" block w-20 mb-2" alt="logo laine des coccinelles" src="laine.svg" />
              <div className=" flex flex-row justify-around">
                <a href="https://www.facebook.com">
                  <img className=" block w-6" alt="facebook laine des occinelles" src="facebook.svg" />

                </a>
                <a href="https://lalainedescoccinelles.be/">

                  <img className=" block w-6" alt="site laine des occinelles" src="website.svg" />
                </a>
              </div>
            </div>
            <div className=" flex flex-col">
              <img className=" block w-20 mb-2" alt="Coccinelles et compagnies" src="ygaelle.svg" />
              <div className=" flex flex-row justify-around">
                <a href="https://www.facebook.com">
                  <img className=" block w-6" alt="facebook Ygaelle" src="linkedin-ico-bord.svg" />

                </a>
                <a href="https://ygaelle.com/">

                  <img className=" block w-6" alt="site Ygaelle" src="website.svg" />
                </a>
              </div>
            </div>
          </div>

        </article>
      </section>
    </Layout>
  )
}

export default ContactPage;
