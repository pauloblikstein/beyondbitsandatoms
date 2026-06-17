/* global React */
function Footer() {
  return (
    <footer className="bba-footer" data-screen-label="Footer">
      <div className="foot-cols">
        <div>
          <div style={{fontFamily:'var(--font-display)',fontWeight: 600,fontStretch:'72%',fontSize:'28px',lineHeight:1,color:'var(--ink-900)',letterSpacing:'-.025em'}}>
            Beyond Bits <span style={{color:'var(--tltl-magenta)',fontStretch:'60%'}}>&amp;</span> Atoms
          </div>
          <p style={{margin:'10px 0 0',fontSize:14,color:'var(--fg-3)',maxWidth:280,lineHeight:1.5}}>
            A constructionist edtech class at Teachers College, Columbia University.
            Run from the Transformative Learning Technologies Lab.
          </p>
        </div>
        <div>
          <h4>Course</h4>
          <ul>
            <li><a href="#">Course info</a></li>
            <li><a href="#">Syllabus</a></li>
            <li><a href="#">Final project</a></li>
            <li><a href="#">Office hours</a></li>
            <li><a href="#">Expo archive</a></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Readings</a></li>
            <li><a href="#">Assignments</a></li>
            <li><a href="#">Lab tools</a></li>
            <li><a href="#">Slack</a></li>
            <li><a href="#">Canvas</a></li>
          </ul>
        </div>
        <div>
          <h4>Affiliations</h4>
          <div className="marks">
            <img className="tltl" src="assets/logo-tltl-horizontal.png" alt="TLTL"/>
            <img src="assets/tc-left-aligned.jpg" alt="Teachers College"/>
            <img src="assets/columbia-university-blue.png" alt="Columbia University"/>
          </div>
        </div>
      </div>
      <div className="foot-fine">
        <span>© 2026 Beyond Bits &amp; Atoms · MSTU 5180 / 5181 · Teachers College, Columbia University</span>
        <span style={{fontFamily:'var(--font-mono)'}}>v.spring.2026</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
