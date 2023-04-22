import { AboutProps } from "./About";
export { getStaticProps } from "./about.service";

const About = (props: AboutProps) => {
  const { users } = props;
  return users.map((user) => <div key={user.id}>{user.name}</div>);
};

export default About;
