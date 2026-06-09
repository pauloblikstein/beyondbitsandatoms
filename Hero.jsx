/* global React */
/* Three hero variations selectable via the Tweaks panel. */

function HeroV1() {
  /* Watercolor washes — ten layered, canonical composition recipe */
  return (
    <section className="hero hero-v1" data-screen-label="Hero · Watercolor">
      <div className="stage">
        <div className="composition">
          <div className="s s1"></div>
          <div className="s s2"></div>
          <div className="s s3"></div>
          <div className="s s4"></div>
          <div className="s s5"></div>
          <div className="s s6"></div>
          <div className="s s7"></div>
          <div className="s s8"></div>
          <div className="s s9"></div>
          <div className="s s10"></div>
        </div>
        <div className="hero-text">
          <span className="eyebrow">MSTU 5180 + 5181 · Spring 2026</span>
          <h1>Design, build &amp; critique constructionist edtech.</h1>
          <p className="lede">A theory class and a lab, taken together. You'll spend the semester
            making something real — a working prototype of an educational technology — and writing
            it up to submit to IDC.</p>
          <div className="hero-ctas">
            <a className="btn primary" href="#" onClick={e => e.preventDefault()}>Read the syllabus</a>
            <a className="btn secondary" href="#" onClick={e => e.preventDefault()}>See past projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroV2() {
  return (
    <section className="hero hero-v2" data-screen-label="Hero · Color field">
      <div className="stage">
        <div className="hero-text">
          <span className="eyebrow" style={{color:'var(--ink-700)'}}>MSTU 5180 + 5181 · Teachers College</span>
          <h1>Bring something broken to fix, or a question to take apart.</h1>
          <p className="lede" style={{color:'var(--ink-700)'}}>
            Beyond Bits &amp; Atoms is the constructionist edtech class at Teachers College.
            You'll learn the theory, you'll build the thing, and you'll show it at the Expo.
          </p>
          <div className="hero-ctas">
            <a className="btn primary" href="#" onClick={e => e.preventDefault()}>Read the syllabus</a>
            <a className="btn secondary" href="#" onClick={e => e.preventDefault()}>Office hours</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroV3() {
  return (
    <section className="hero hero-v3" data-screen-label="Hero · Zine grid">
      <div className="stage">
        <div className="panel title">
          <span className="meta">MSTU 5180 + 5181</span>
          <h1>Beyond<br/>Bits &amp;<br/>Atoms.</h1>
          <span className="meta">Teachers College, Columbia</span>
        </div>
        <div className="panel q1">
          <span className="num">Question 01</span>
          <h2>How does learning work?</h2>
        </div>
        <div className="panel q2">
          <span className="num">Question 02</span>
          <h2>How does schooling work?</h2>
        </div>
        <div className="panel q3">
          <span className="num">Question 03</span>
          <h2>How can technology affect both?</h2>
        </div>
      </div>
    </section>
  );
}

function Hero({ variant }) {
  if (variant === 'colorfield') return <HeroV2 />;
  if (variant === 'zine')       return <HeroV3 />;
  return <HeroV1 />;
}

Object.assign(window, { Hero, HeroV1, HeroV2, HeroV3 });
