import Footer from "@/components/shared/Footer/Footer";
import NavBar from "@/components/shared/NavBar/navComponent/NavBar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
