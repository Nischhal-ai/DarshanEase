import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-4">

      {/* Hero Banner */}
      <div
        className="p-3 mb-4 text-white rounded"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/165779/pexels-photo-165779.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px"
        }}
      >
        <div style={{backgroundColor: "rgba(0,0,0,0.5)", padding: "30px", borderRadius: "10px"}}>
          <h1>DarshanEase</h1>
          <p className="lead">
            Book temple darshan tickets easily and skip long queues.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="row g-4">

        {/* Book Darshan */}
        <div className="col-md-4">
          <Link to="/booking" style={{ textDecoration: "none", color: "black" }}>
            <div className="card shadow h-100">

              <img
                src="https://images.unsplash.com/photo-1609947017136-9daf32a5eb16"
                className="card-img-top"
                alt="Temple"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title">Book Darshan</h5>
                <p className="card-text">
                  Reserve your darshan slot online in advance.
                </p>
              </div>

            </div>
          </Link>
        </div>

        {/* Manage Bookings */}
        <div className="col-md-4">
          <Link to="/mybookings" style={{ textDecoration: "none", color: "black" }}>
            <div className="card shadow h-100">

              <img
                src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2"
                className="card-img-top"
                alt="Temple"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title">Manage Bookings</h5>
                <p className="card-text">
                  View and manage all your darshan bookings.
                </p>
              </div>

            </div>
          </Link>
        </div>

        {/* Quick Entry */}
        <div className="col-md-4">
          <Link to="/quickentry" style={{ textDecoration: "none", color: "black" }}>
            <div className="card shadow h-100">

              <img
                src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg"
                className="card-img-top"
                alt="Temple"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title">Quick Entry</h5>
                <p className="card-text">
                  Skip long waiting lines with digital passes.
                </p>
              </div>

            </div>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Home;