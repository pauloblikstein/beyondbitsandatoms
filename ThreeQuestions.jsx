/* global React */
function ThreeQuestions() {
  const qs = [
    { n: '01', q: 'How does learning work?',
      body: 'Constructivism, constructionism, embodied and situated cognition — what we actually know about how minds change.' },
    { n: '02', q: 'How does schooling work?',
      body: 'Schools are technologies too. We read critical pedagogy and look at where the system bends, breaks, or holds.' },
    { n: '03', q: 'How can technology affect both?',
      body: "Tools shape what gets learned and who gets to learn it. Design and study them as if it matters — because it does." },
  ];
  return (
    <section className="section" data-screen-label="Three questions">
      <div className="section-head">
        <span className="num">§ I</span>
        <h2>Three questions.</h2>
      </div>
      <div className="questions">
        {qs.map(q => (
          <article key={q.n} className="qrow">
            <span className="qn">Q · {q.n}</span>
            <h3>{q.q}</h3>
            <p>{q.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
window.ThreeQuestions = ThreeQuestions;
