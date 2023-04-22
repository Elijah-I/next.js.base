import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { LayoutProps } from "./Layout.d";

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
