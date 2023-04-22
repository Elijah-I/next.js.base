import type { ServiceResponse, User } from "./about.d";

export const getStaticProps = async (): Promise<ServiceResponse> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await data.json();

  if (!users) {
    return {
      notFound: true
    };
  }

  return {
    props: { users }
  };
};
