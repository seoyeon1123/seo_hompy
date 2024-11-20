const TopBar = () => {
  return (
    <>
      <nav className=" w-full lg:px-[200px]">
        <div className="w-full py-5 flex justify-start items-center gap-4 px-10">
          <a
            href="https://github.com/seoyeon1123"
            className="text-white hover:text-[#6A9C89] hover:text-shadow-lg transition"
          >
            <h1 className="text-lg font-semibold">GitHub</h1>
          </a>
          <a
            href="https://velog.io/@leeeee/posts"
            className="text-white hover:text-[#6A9C89] hover:text-shadow-lg transition"
          >
            <h1 className="text-lg font-semibold">Velog</h1>
          </a>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
