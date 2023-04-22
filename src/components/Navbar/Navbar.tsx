import Link from "next/link";
import { useRouter } from "next/router";
import { NAVIGATION } from "@/types/Navigation.d";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { pathname } = useRouter();

  const navigation = [
    { id: 1, title: "home", href: NAVIGATION.HOME },
    { id: 2, title: "about", href: NAVIGATION.ABOUT },
    { id: 3, title: "contacts", href: NAVIGATION.CONTACTS }
  ];

  return (
    <nav>
      <ul className={styles.nav}>
        {navigation.map((navItem) => (
          <li key={navItem.id}>
            <Link
              href={navItem.href}
              className={navItem.href === pathname ? styles.active : ""}
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
