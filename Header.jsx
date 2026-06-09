/* global React */
function Header({ route, setRoute }) {
  const items = [
    { id: 'home',     label: 'Course Info' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'project',  label: 'Final Project' },
    { id: 'hours',    label: 'Office Hours' },
    { id: 'people',   label: 'People' },
  ];
  return (
    <header className="bba-header" data-screen-label="Header">
      <a className="bba-brand" onClick={() => setRoute('home')}>
        <span className="wordmark">Beyond Bits <span className="amp">&amp;</span> Atoms</span>
        <span className="course">MSTU 5180 · 5181</span>
      </a>
      <nav>
        {items.map(it => (
          <a key={it.id}
             className={route === it.id ? 'is-active' : ''}
             onClick={() => setRoute(it.id)}>{it.label}</a>
        ))}
      </nav>
      <a className="slack" href="#" onClick={e => e.preventDefault()}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
        </svg>
        Join Slack
      </a>
    </header>
  );
}
window.Header = Header;
