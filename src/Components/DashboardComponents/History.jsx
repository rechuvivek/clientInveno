import { useEffect, useState } from "react";

const API_URI = import.meta.env.VITE_API_BASE_URI;

function History() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const res = await fetch(`${API_URI}/saleLog`);
        if (!res.ok) throw new Error("Failed to fetch sales data");

        const data = await res.json();
        setSales(Array.isArray(data.data) ? data.data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSales();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this entry?")) return;
    try {
      const res = await fetch(`${API_URI}/saleLog/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete entry");
      setSales(sales.filter((sale) => sale.id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = (sale) => {
    setEditingId(sale.id);
    setEditForm({
      name: sale.name,
      quantity: sale.quantity,
      price: sale.price,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URI}/saleLog/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });

      if (!res.ok) throw new Error("Failed to update entry");

      const updated = await res.json();
      const updatedSale = updated.data;

      if (updatedSale) {
        setSales(
          sales.map((sale) => (sale.id === editingId ? updatedSale : sale))
        );
        setEditingId(null);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>📊 Sales History</h1>

        {loading ? (
          <p style={loadingStyle}>Loading...</p>
        ) : error ? (
          <p style={errorStyle}>{error}</p>
        ) : sales.length === 0 ? (
          <p style={emptyStyle}>No sales records found.</p>
        ) : (
          <div style={tableWrapperStyle}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>Timestamp</th>
                  <th style={thStyle}>Product</th>
                  <th style={thStyle}>Quantity</th>
                  <th style={thStyle}>Price</th>
                  <th style={thStyle}>Total</th>
                  <th style={thStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((sale) => (
                  <tr key={sale.id} style={trStyle}>
                    <td style={tdStyle}>{sale.id}</td>
                    <td style={tdStyle}>
                      {new Date(sale.created_at).toLocaleDateString()}
                    </td>
                    <td style={tdStyle}>
                      {editingId === sale.id ? (
                        <input
                          style={inputStyle}
                          type="text"
                          value={editForm.name}
                          onChange={(e) =>
                            setEditForm({ ...editForm, name: e.target.value })
                          }
                        />
                      ) : (
                        sale.name
                      )}
                    </td>
                    <td style={tdStyle}>
                      {editingId === sale.id ? (
                        <input
                          style={inputStyle}
                          type="number"
                          value={editForm.quantity}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              quantity: Number(e.target.value),
                            })
                          }
                        />
                      ) : (
                        sale.quantity
                      )}
                    </td>
                    <td style={tdStyle}>
                      {editingId === sale.id ? (
                        <input
                          style={inputStyle}
                          type="number"
                          value={editForm.price}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              price: Number(e.target.value),
                            })
                          }
                        />
                      ) : (
                        sale.price
                      )}
                    </td>
                    <td style={tdStyle}>{sale.total}</td>
                    <td style={tdStyle}>
                      {editingId === sale.id ? (
                        <>
                          <button style={editBtn} onClick={handleEditSubmit}>
                            Save
                          </button>
                          <button
                            style={cancelBtn}
                            onClick={() => setEditingId(null)}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            style={editBtn}
                            onClick={() => handleEdit(sale)}
                          >
                            Edit
                          </button>
                          <button
                            style={deleteBtn}
                            onClick={() => handleDelete(sale.id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default History;

// 🔹 STYLES
const pageStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  // background: "#f5f6fa",
  //  // minHeight: "1vh",
};
const cardStyle = {
  width: "100%",
  maxWidth: "1000px",
  padding: "20px",
  borderRadius: "12px",
  background: "#fff",
  boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "20px",
  color: "#1D2671",
};

const tableWrapperStyle = {
  maxHeight: "400px",
  overflowY: "auto",
  overflowX: "auto",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

const tableStyle = {
  width: "100%",
  minWidth: "700px",
  borderCollapse: "collapse",
};

const thStyle = {
  position: "sticky",
  top: 0,
  background: "#f0f0f0",
  borderBottom: "2px solid #ccc",
  padding: "12px",
  textAlign: "left",
  zIndex: 1,
};

const trStyle = { transition: "background 0.3s" };
const tdStyle = { padding: "12px", borderBottom: "1px solid #eee" };

const inputStyle = {
  padding: "6px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  width: "100%",
  boxSizing: "border-box",
  minWidth: "60px",
};

const editBtn = {
  padding: "5px 10px",
  marginRight: "5px",
  background: "#1D2671",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const cancelBtn = {
  padding: "5px 10px",
  marginRight: "5px",
  background: "#999",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const deleteBtn = {
  padding: "5px 10px",
  background: "#e74c3c",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const loadingStyle = {
  textAlign: "center",
  fontWeight: "bold",
  color: "#1D2671",
};
const errorStyle = { textAlign: "center", fontWeight: "bold", color: "red" };
const emptyStyle = { textAlign: "center", fontStyle: "italic", color: "#555" };
