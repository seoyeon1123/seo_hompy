import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen justify-center items-center gap-0.5">
      {/* Sidebar section */}
      <div className="w-full md:w-auto md:h-4/5 bg-yellow-300 p-10 md:pr-0 rounded-lg shadow-md">
        <Sidebar />
      </div>

      {/* Outlet and Navigation section */}
      <div className="relative w-full md:w-3/5 md:h-4/5 bg-yellow-300 p-10 md:pl-0 rounded-lg shadow-md flex flex-col md:flex-row">
        <Outlet />

        <div className="absolute md:top-20 md:-right-[73px] right-0 z-10">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Layout;
