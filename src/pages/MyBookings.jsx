import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function MyBookings() {

  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  const cancelBooking = (index) => {

    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmCancel) return;

    const updatedBookings = [...bookings];

    updatedBookings[index].status = "Cancelled";

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    alert("Booking cancelled successfully❗");

  };

  return (
    <div className="container mt-5">

      <Link to="/" className="btn btn-dark mb-3">
        ← Back to Home
      </Link>

      <h2>My Bookings</h2>
      <input
        type="text"
        className="form-control mt-3"
        placeholder="Search booking by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings
          .filter((booking) =>
            booking.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((booking, index) => (
            <div key={index} className="card shadow p-3 mt-3">

              <h5>{booking.name}</h5>
              <p><strong>Booking ID:</strong> {booking.id}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Slot:</strong> {booking.slot}</p>
              <p><strong>Type:</strong> {booking.type}</p>
              <p><strong>Status:</strong> {booking.status}</p>

              <button
                className="btn btn-danger mt-2"
                disabled={booking.status === "Cancelled"}
                onClick={() => cancelBooking(index)}
              >
                {booking.status === "Cancelled" ? "Cancelled" : "Cancel Booking"}
              </button>

            </div>
          ))
      )}

    </div>
  );
}

export default MyBookings;