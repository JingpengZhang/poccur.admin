import TopBar from "@/components/top-bar";
import { Outlet } from "react-router-dom";
import Navigation from "@/components/navigation";

const Main: React.FC = () => {
  return (
    <section className="w-screen flex flex-col min-h-screen ">
      <TopBar />
      <section className=" flex-grow flex">
        <Navigation />
        <section className="  flex-grow">
          <Outlet />
        </section>
      </section>
    </section>
  );
};

export default Main;
