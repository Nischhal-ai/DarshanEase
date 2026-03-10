import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function Booking() {

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [type, setType] = useState("");

  const handleBooking = async () => {

    if (name === "" || date === "" || slot === "" || type === "") {
      alert("⚠️ Please fill all fields before booking.");
      return;
    }

    const booking = {
      id: "DE" + Math.floor(Math.random() * 100000),
      name,
      date,
      slot,
      type,
      status: "Confirmed"
    };
    try {

      await axios.post("https://jsonplaceholder.typicode.com/posts", booking);

      const existingBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

      existingBookings.push(booking);

      localStorage.setItem("bookings", JSON.stringify(existingBookings));

      alert("✅ Darshan Booking Confirmed!");

    } catch (error) {

      alert("❌ Booking failed");

    }

  };

  return (
    <div className="container mt-5">

      <Link to="/" className="btn btn-dark mb-3">
        ← Back to Home
      </Link>

      <h2>Book Your Darshan</h2>

      <div className="card p-4 shadow">

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Date</label>
        </div>

        <div className="form-floating mb-3">
          <select
            className="form-select"
            value={slot}
            onChange={(e) => setSlot(e.target.value)}
          >
            <option value="">Select Slot</option>
            <option>6 AM - 9 AM</option>
            <option>10 AM - 1 PM</option>
            <option>4 PM - 7 PM</option>
          </select>
          <label>Time Slot</label>
        </div>

        <div className="form-floating mb-3">
          <select
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option>Normal</option>
            <option>VIP</option>
            <option>Pooja</option>
          </select>
          <label>Darshan Type</label>
        </div>

        <button
          className="btn btn-success w-100"
          onClick={handleBooking}
        >
          Confirm Booking
        </button>

      </div>
    </div>
  );
}

export default Booking;