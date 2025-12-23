import { useState } from "react";
const API_URI = import.meta.env.VITE_API_BASE_URI;

function DataEntry() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URI}/saleLog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([{ name, quantity, price }]),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Sale entry added successfully!");
        setSuccess(true);
        setName("");
        setQuantity("");
        setPrice("");
      } else {
        setMessage(data.message || "Something went wrong");
        setSuccess(false);
      }
    } catch (err) {
      setMessage("Server error");
      setSuccess(false);
    }
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>🛒 Sales Data Entry</h1>

        <form onSubmit={handleSubmit} style={formStyle}>
          <label style={labelStyle}>Product Name</label>
          <input
            style={inputStyle}
            type="text"
            value={name}
            placeholder="Enter product name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label style={labelStyle}>Quantity</label>
          <input
            style={inputStyle}
            type="number"
            value={quantity}
            placeholder="Enter quantity"
            onChange={(e) => setQuantity(e.target.value)}
            required
          />

          <label style={labelStyle}>Price</label>
          <input
            style={inputStyle}
            type="number"
            value={price}
            placeholder="Enter price"
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <button style={buttonStyle} type="submit">
            Submit
          </button>
        </form>

        {message && <p style={success ? successMsg : errorMsg}>{message}</p>}
      </div>
    </div>
  );
}

export default DataEntry;

// 🔥 PAGE STYLES
const pageStyle = {
  // minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // background: "linear-gradient(135deg,#1D2671,#C33764)",
};

// 🔥 CARD
const cardStyle = {
  width: "30vw",
  padding: "25px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.97)",
  boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
  animation: "fadeIn 0.6s ease",
};

// 🔥 HEADING
const titleStyle = {
  textAlign: "center",
  marginBottom: "15px",
  color: "#333",
};

// 🔥 FORM
const formStyle = {
  display: "flex",
  flexDirection: "column",
};

const labelStyle = {
  marginBottom: "5px",
  fontWeight: "bold",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginBottom: "12px",
  outline: "none",
  fontSize: "14px",
};

const buttonStyle = {
  padding: "10px",
  background: "#1D2671",
  color: "#fff",
  fontSize: "15px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  marginTop: "5px",
};

const successMsg = {
  color: "green",
  marginTop: "10px",
  textAlign: "center",
  fontWeight: "bold",
};

const errorMsg = {
  color: "red",
  marginTop: "10px",
  textAlign: "center",
  fontWeight: "bold",
};
