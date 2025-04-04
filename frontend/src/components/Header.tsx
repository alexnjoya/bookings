import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-blue-800 pl-10 pr-10 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Holiday.com</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className="flex bg-white items-center text-blue-600 px-3 ton-bold hover:bg-gray-200  "
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};
