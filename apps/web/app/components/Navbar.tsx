import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      {" | "}
      <Link href="/builder">Build & Test</Link>
      {" | "}
      <Link href="/rate-my-pc">Rate My PC</Link>
      {" | "}
      <Link href="/results">Results</Link>
    </nav>
  );
}