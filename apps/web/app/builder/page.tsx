import Link from "next/link";

export default function BuilderPage() {
  return (
    <main>
      <h1>Build & Test</h1>

      <p>
        Select your PC components here and test their expected performance.
      </p>

      <p>Component selection will be added later.</p>

      <nav>
        <Link href="/">Home</Link>
        {" | "}
        <Link href="/rate-my-pc">Rate My PC</Link>
        {" | "}
        <Link href="/results">Results</Link>
      </nav>
    </main>
  );
}