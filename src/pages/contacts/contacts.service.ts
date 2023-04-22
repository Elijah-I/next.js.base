import type { Contact } from "./contacts.d";

export const getStaticProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const contacts: Contact[] = await data.json();

  if (!contacts) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      contacts
    }
  };
};
