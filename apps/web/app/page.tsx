import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>PC Performance Lab</h1>

      <p>
        Build a PC, test its performance, or rate your current system.
      </p>

      <nav>
        <ul>
          <li>
            <Link href="/builder">Build & Test</Link>
          </li>

          <li>
            <Link href="/rate-my-pc">Rate My PC</Link>
          </li>

          <li>
            <Link href="/results">View Results</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}