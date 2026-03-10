import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        DarshanEase
      </Link>

      <div>
        <Link className="btn btn-outline-light me-2" to="/">
          Home
        </Link>

        <Link className="btn btn-outline-light me-2" to="/booking">
          Book Darshan
        </Link>

        <Link className="btn btn-outline-light" to="/mybookings">
          My Bookings
        </Link>
      </div>
    </nav>
  );
}

export default Header;