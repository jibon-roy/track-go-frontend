import NavBar from "@/components/shared/NavBar/navComponent/NavBar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="h-full min-h-[calc(100vh-0px)] ">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default layout;
