import "./Body.css";

function Body() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Track the</h1> 
          <h1><span>Indian Rupee</span></h1>
          <h1>in Real Time</h1>

          <p>
            Monitor INR exchange rates, analyse trends and stay
            informed with live currency updates.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Start Tracking
            </button>

            <button className="secondary-btn">
              View Rates
            </button>
          </div>
        </div>

        <div className="hero-card">
          <p>USD → INR</p>
          <h2>₹84.32</h2>
          <span>+0.23%</span>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Everything You Need</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>📈 Live Rates</h3>
            <p>Track currency exchange rates in real time.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Trends</h3>
            <p>Analyse historical currency movements.</p>
          </div>

          <div className="feature-card">
            <h3>🔔 Alerts</h3>
            <p>Get notified when rates hit your target.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Never Miss a Rate Change</h2>

        <p>
          Join thousands of users tracking currency movements daily.
        </p>

        <button className="primary-btn">
          Get Started Free
        </button>
      </section>
    </>
  );
}

export default Body;