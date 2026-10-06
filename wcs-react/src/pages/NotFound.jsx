import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "4rem 1.5rem" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ marginBottom: "1.5rem" }}>Page not found.</p>
      <Link to="/" style={{ textDecoration: "underline" }}>
        Back to Home
      </Link>
    </div>
  );
}
