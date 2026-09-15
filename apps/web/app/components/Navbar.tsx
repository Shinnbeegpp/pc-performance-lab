import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          PC Performance Lab
        </Link>

        <nav className="navbar-links">
          <Link href="/" className="navbar-link">
            Home
          </Link>

          <Link href="/builder" className="navbar-link">
            Build & Test
          </Link>

          <Link href="/rate-my-pc" className="navbar-link">
            Rate My PC
          </Link>

          <Link href="/results" className="navbar-link">
            Results
          </Link>
        </nav>
      </div>
    </header>
  );
}