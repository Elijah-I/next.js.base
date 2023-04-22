export interface User {
  id: number;
  name: string;
}

export interface AboutProps {
  users: User[];
}

export type ServiceResponse =
  | {
      props: { users: User[] };
    }
  | {
      notFound: boolean;
    };
