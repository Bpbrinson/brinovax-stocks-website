import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1>BrinovaX Stocks</h1>
          <p>Welcome. This is a fresh site, ready to make your own.</p>
          <div className="hero-actions"><Link className="btn" to="/contact">Get in touch</Link></div>
        </div>
      </section>
      <section className="features">
        <article><h3>Quality</h3><p>A short line about what you do best.</p></article>
        <article><h3>Service</h3><p>A short line about how you help customers.</p></article>
        <article><h3>Local</h3><p>A short line about who you serve.</p></article>
      </section>
    </>
  );
}
