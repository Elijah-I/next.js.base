import type { GetStaticPaths, GetStaticProps } from "next";
import type { Params } from "./contact";
import { Contact } from "../contacts";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { contact: id } = context.params as Params;

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const contact: Contact = await data.json();

  if (!contact) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      contact
    }
  };
};
