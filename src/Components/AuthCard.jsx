function AuthCard({ title, children }) {
  return (
    <div className="d-flex align-items-center p-4">
      <div
        className="card p-4 shadow"
        style={{
          width: "22rem",
          backgroundColor: "white",
          borderRadius: "20px",
          border: "1px solid #00000040",
        }}
      >
        <h5 className="card-title text-center fw-bold mb-2">{title}</h5>
        {children}
      </div>
    </div>
  );
}

export default AuthCard;
