/* global React */
function PeopleStrip() {
  const team = [
    { id: 'person-paulo',   initials: 'PB', name: 'Paulo Blikstein',  role: 'Instructor · TLTL Director' },
    { id: 'person-renato',  initials: 'RR', name: 'Renato Russo',     role: 'Co-instructor' },
    { id: 'person-blake',   initials: 'BD', name: 'Blake Danzig',     role: 'Teaching assistant' },
    { id: 'person-andrea',  initials: 'AM', name: 'Andrea Maidanik',  role: 'Teaching assistant' },
  ];
  return (
    <section className="section" data-screen-label="People">
      <div className="section-head">
        <span className="num">§ V</span>
        <h2>People.</h2>
      </div>
      <div className="people">
        <span className="num">§ V.1</span>
        {team.map(p => (
          <article key={p.id} className="person">
            <image-slot id={p.id} shape="circle" placeholder={p.initials}></image-slot>
            <h4>{p.name}</h4>
            <p>{p.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
window.PeopleStrip = PeopleStrip;
