import { ContactProps } from "./contact";
export { getServerSideProps } from "./contact.service";

const Contact = (props: ContactProps) => {
  const { contact } = props;

  if (!contact) return <>error</>;

  return (
    <div>
      {contact.id}. <b>{contact.name}</b> [{contact.email}]
    </div>
  );
};

export default Contact;
