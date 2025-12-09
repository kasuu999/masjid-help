import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// Correct background image
import bgImage from "../assets/Jama-Masjid-Delhi-India.webp";

// Correct team images from assets folder
import kasimImg from "../assets/image.png";
import qamarImg from "../assets/image1.png";

const MasjidHelpPortal = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    place: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert("Please set EmailJS keys in .env");
      return;
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        alert("Your complaint has been sent!");
        setForm({ name: "", phone: "", location: "", place: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        alert("Error sending message.");
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(2px)",
          zIndex: 1,
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 1100,
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
        }}
      >
        {/* Left Side */}
        <div style={{ flex: "1 1 350px", padding: 20, color: "white" }}>
          <h1 style={{ fontSize: 30, marginBottom: 10 }}>🕌 Masjid Help Portal</h1>
          <p style={{ opacity: 0.9, marginBottom: 18 }}>
            If you see any problem in a Masjid/Dargah/Khankah, report it below.
          </p>

          {/* Team Cards */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <TeamCard img={kasimImg} name="Shaikh Kasim" username="@kasuu999" />
            <TeamCard img={qamarImg} name="Syed Qamar Ali" username="@syed_qamar_ali" />
          </div>

          <div style={{ marginTop: 20, opacity: 0.9 }}>
            <p>
              Contact:{" "}
              <a
                href="mailto:shaikhskkasim251@gmail.com"
                style={{ color: "#ffd966" }}
              >
                shaikhskkasim251@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+919999999999" style={{ color: "#ffd966" }}>
                +91 
              </a>
            </p>
          </div>
        </div>

        {/* Right - Form */}
        <form
          onSubmit={sendEmail}
          style={{
            flex: "1 1 350px",
            background: "rgba(255,255,255,0.08)",
            padding: 20,
            borderRadius: 14,
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: 8 }}>
            Report a Problem
          </h2>

          <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} style={inputStyle} required />
          <input name="phone" placeholder="Phone number" value={form.phone} onChange={handleChange} style={inputStyle} required />
          <input name="location" placeholder="City / Village" value={form.location} onChange={handleChange} style={inputStyle} />
          <input name="place" placeholder="Masjid / Dargah name" value={form.place} onChange={handleChange} style={inputStyle} />

          <textarea
            name="message"
            placeholder="Describe the problem"
            value={form.message}
            onChange={handleChange}
            style={{ ...inputStyle, height: 100 }}
            required
          />

          <button type="submit" style={submitStyle}>Send Complaint</button>
        </form>
      </div>
    </div>
  );
};

/* Team Card Component */
const TeamCard = ({ img, name, username }) => (
  <div style={{ textAlign: "center", width: 120 }}>
    <img
      src={img}
      alt={name}
      style={{
        width: 110,
        height: 110,
        objectFit: "cover",
        borderRadius: 12,
        border: "3px solid rgba(255,255,255,0.2)",
      }}
    />
    <div style={{ marginTop: 6, fontWeight: 700 }}>{name}</div>
    <div style={{ opacity: 0.85 }}>{username}</div>
  </div>
);

const inputStyle = {
  padding: "12px 10px",
  borderRadius: 10,
  border: "none",
  outline: "none",
  fontSize: 15,
  background: "rgba(255,255,255,0.9)",
};

const submitStyle = {
  padding: "12px",
  borderRadius: 10,
  background: "linear-gradient(90deg,#00a884,#0066ff)",
  color: "white",
  fontWeight: 700,
  border: "none",
  cursor: "pointer",
  marginTop: 8,
};

export default MasjidHelpPortal;
