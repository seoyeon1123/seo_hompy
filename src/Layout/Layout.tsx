import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="flex flex-row h-screen justify-center items-center gap-0.5">
      {/* Sidebar 부분 */}
      <div className="h-4/5 bg-yellow-300 p-10 pr-0 rounded-lg shadow-md">
        <Sidebar />
      </div>

      {/* Outlet과 Navigation 부분 */}
      <div className="relative w-3/5 h-4/5 bg-yellow-300 p-10 pl-0 rounded-lg shadow-md flex flex-row">
        <Outlet />

        {/* Navigation이 Outlet 옆에 붙고 z-10으로 위에 표시됨 */}
        <div className="absolute top-20 -right-[73px] z-10 ">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Layout;
