import Link from "next/link";

export default function RateMyPCPage() {
  return (
    <main>
      <h1>Rate My PC</h1>

      <p>
        Enter your existing PC specifications to receive a performance rating
        and upgrade recommendations.
      </p>

      <p>PC specification inputs will be added later.</p>

      <nav>
        <Link href="/">Home</Link>
        {" | "}
        <Link href="/builder">Build & Test</Link>
        {" | "}
        <Link href="/results">Results</Link>
      </nav>
    </main>
  );
}