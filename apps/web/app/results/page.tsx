import Link from "next/link";

export default function ResultsPage() {
  return (
    <main>
      <h1>Performance Results</h1>

      <p>Your PC performance results will appear here.</p>

      <ul>
        <li>Overall Score: --</li>
        <li>Gaming Score: --</li>
        <li>Productivity Score: --</li>
        <li>Compatibility: --</li>
        <li>Recommended Upgrade: --</li>
      </ul>

      <nav>
        <Link href="/">Home</Link>
        {" | "}
        <Link href="/builder">Build & Test</Link>
        {" | "}
        <Link href="/rate-my-pc">Rate My PC</Link>
      </nav>
    </main>
  );
}