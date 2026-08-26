import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full h-dvh items-center justify-center">
        <div className="grid gap-2 place-items-center">
          <p className="text-4xl font-bold">404</p>
          <p className="text-dark-gray">Page not found</p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
