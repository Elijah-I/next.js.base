import Link from "next/link";
import type { ContactsProps } from "./contacts";
export { getStaticProps } from "./contacts.service";

const Contacts = (props: ContactsProps) => {
  const { contacts } = props;
  return contacts.map((contact) => (
    <div key={contact.id}>
      <Link href={`contacts/${contact.id}`}>
        <b>
          {contact.name} [{contact.email}]
        </b>
      </Link>
    </div>
  ));
};

export default Contacts;
