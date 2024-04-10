const Error = () => {
  return (
    <section className="flex items-center h-svh p-16 bg-[#5CDB95]">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-[#05386B]">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-[#05386B]">
            Sorry, we couldn&#39;t find this page.
          </p>
          <p className="mt-4 mb-8 text-[#05386B]">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <a
            rel="noopener noreferrer"
            href="/"
            className="px-8 py-3 font-semibold rounded bg-[#05386B] hover:bg-[#379683] text-[#5CDB95] border-none hover:text-[#EDF5E1]"
          >
            Back to homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default Error;
