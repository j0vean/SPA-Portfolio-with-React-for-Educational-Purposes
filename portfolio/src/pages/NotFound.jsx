import PageNav from "../components/PageNav";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <PageNav />
      <h1>Page not found.</h1>
      <p>
        {" "}
        Back to the <NavLink to="/">Home</NavLink>
      </p>
    </div>
  );
}

export default NotFound;
