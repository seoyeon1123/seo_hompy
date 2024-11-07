const Navigation = () => {
  return (
    <>
      <nav className="bg-[#16423C] shadow-md w-full top-0 z-10">
        <div className="container mx-auto  py-5 flex justify-start items-center gap-4">
          <a
            href="https://github.com/seoyeon1123"
            className="text-white hover:text-[#6A9C89] hover:text-shadow-lg transition"
          >
            <h1 className="text-lg font-semibold">GitHub</h1>
          </a>
          <a
            href="https://velog.io/@leeeee/posts"
            className="text-white hover:text-[#6A9C89] hover:text-shadow-lg  transition"
          >
            <h1 className="text-lg font-semibold">Velog</h1>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
