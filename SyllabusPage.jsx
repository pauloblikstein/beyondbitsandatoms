/* global React */

function SyllabusPage() {
  const weeks = [
    { w: '01', date: 'Jan 22', theme: 'What is constructionism?', reading: 'Papert, Mindstorms (Ch. 1)', assign: '✓+' },
    { w: '02', date: 'Jan 29', theme: 'Constructivism vs. instructionism', reading: 'Piaget, Genetic Epistemology', assign: '✓' },
    { w: '03', date: 'Feb 05', theme: 'Embodied & situated cognition', reading: 'Lave & Wenger', assign: '✓+' },
    { w: '04', date: 'Feb 12', theme: 'Critical pedagogy', reading: 'Freire, Pedagogy of the Oppressed', assign: '✓' },
    { w: '05', date: 'Feb 19', theme: 'Tools and representations', reading: 'diSessa, Changing Minds', assign: '✓–' },
    { w: '06', date: 'Feb 26', theme: 'Maker education', reading: 'Blikstein, Digital Fabrication', assign: '✓' },
    { w: '07', date: 'Mar 05', theme: 'Mid-semester project review', reading: '— (working session)', assign: '—' },
    { w: '08', date: 'Mar 12', theme: 'Research methods', reading: 'Method-readings packet', assign: '✓+' },
  ];
  return (
    <div data-screen-label="Page · Syllabus">
      <section className="section first">
        <div className="section-head">
          <div>
            <span className="eyebrow">MSTU 5180 + 5181 · Spring 2026</span>
            <h2>Syllabus.</h2>
            <p className="lede" style={{marginTop:'var(--sp-4)',maxWidth:680}}>
              We meet Tuesdays for theory (5180) and Thursdays for lab (5181). Assignments are due
              Monday at 9pm and discussed in the next lecture.
            </p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:8,minWidth:220}}>
            <span className="eyebrow">Logistics</span>
            <div style={{fontFamily:'var(--font-mono)',fontSize:13,color:'var(--fg-2)',lineHeight:1.7}}>
              Tue 4:00–6:00pm · Macy 444<br/>
              Thu 4:00–6:00pm · Macy Lab<br/>
              Lab fee · $100
            </div>
          </div>
        </div>
        <div style={{background:'#fff',border:'1px solid var(--border-1)',borderRadius:'var(--r-md)',overflow:'hidden'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:14}}>
            <thead>
              <tr style={{background:'var(--bg-soft)',borderBottom:'2px solid var(--ink-900)'}}>
                <th style={th()}>Week</th>
                <th style={th()}>Date</th>
                <th style={{...th(),width:'42%'}}>Theme</th>
                <th style={th()}>Reading</th>
                <th style={{...th(),textAlign:'center'}}>Assign.</th>
              </tr>
            </thead>
            <tbody>
              {weeks.map((row, i) => (
                <tr key={row.w} style={{borderBottom:'1px dashed var(--border-1)',background: i%2 ? 'var(--paper)' : '#fff'}}>
                  <td style={td()}><span style={{fontFamily:'var(--font-mono)',fontWeight:600,color:'var(--ink-900)'}}>{row.w}</span></td>
                  <td style={td()}><span style={{fontFamily:'var(--font-mono)',color:'var(--fg-3)'}}>{row.date}</span></td>
                  <td style={td()}><b style={{fontFamily:'var(--font-display)',fontWeight:600,color:'var(--ink-900)'}}>{row.theme}</b></td>
                  <td style={td()}>{row.reading}</td>
                  <td style={{...td(),textAlign:'center'}}><Mark v={row.assign}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{marginTop:'var(--sp-6)',display:'flex',gap:'var(--sp-3)'}}>
          <a className="btn primary" href="../syllabus/index.html">Open full syllabus document →</a>
          <a className="btn secondary" href="#" onClick={e=>e.preventDefault()}>Download PDF</a>
        </div>
      </section>
    </div>
  );
}

function Mark({ v }) {
  if (v === '—') return <span style={{color:'var(--fg-4)'}}>—</span>;
  let cls = 'mark-check';
  if (v === '✓+') cls = 'mark-plus';
  if (v === '✓–') cls = 'mark-minus';
  return <span className={`mark ${cls}`} style={{display:'inline-block',width:32,padding:'2px 0',border:'1.5px solid currentColor',borderRadius:'var(--r-pill)',textAlign:'center',fontFamily:'var(--font-mono)',fontWeight:600,fontSize:12}}>{v}</span>;
}

function th(){ return {textAlign:'left',padding:'12px 14px',fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--fg-3)',fontWeight:500}; }
function td(){ return {padding:'12px 14px',color:'var(--fg-2)',verticalAlign:'top'}; }

Object.assign(window, { SyllabusPage });
