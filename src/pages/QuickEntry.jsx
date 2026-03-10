import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function QuickEntry() {

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const checkAvailability = async () => {

    if (name === "" || time === "" || time === "Select Time") {
      setMessage("⚠️ Please enter name and select a time slot.");
      return;
    }

    // simulate availability
    const available = Math.random() > 0.5;

    if (!available) {
      setMessage("❌ Slot not available. Please choose another time.");
      return;
    }

    const confirmBooking = window.confirm(
      "Slot available! Do you want to book this slot?"
    );

    if (!confirmBooking) return;

    try {

      await axios.post("https://jsonplaceholder.typicode.com/posts", {
        slot: time,
        type: "Quick Entry"
      });

      const booking = {
        id: "DE" + Math.floor(Math.random() * 100000),
        name: name,
        date: new Date().toISOString().split("T")[0],
        slot: time,
        type: "Quick Entry"
      };

      const existingBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

      existingBookings.push(booking);

      localStorage.setItem("bookings", JSON.stringify(existingBookings));

      setMessage("✅ Slot available! Quick entry booked successfully.");
    } catch (error) {

      setMessage("❌ Booking failed.");

    }

  };

  return (
    <div className="container mt-5">

      <Link to="/" className="btn btn-dark mb-3">
        ← Back to Home
      </Link>

      <h2>Quick Entry Pass</h2>

      <div className="card p-4 shadow">

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <label>Select Time Slot</label>

        <select
          className="form-control mb-3"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option>Select Time</option>
          <option>6 AM - 7 AM</option>
          <option>7 AM - 8 AM</option>
          <option>8 AM - 9 AM</option>
        </select>

        <button
          className="btn btn-success"
          onClick={checkAvailability}
        >
          Check Availability
        </button>

        {message && (
          <p className="mt-3 fw-bold">{message}</p>
        )}

      </div>

    </div>
  );
}

export default QuickEntry;