/* global React */
function AboutBlock() {
  return (
    <section className="section" data-screen-label="About BB&A">
      <div className="section-head">
        <span className="num">§ II</span>
        <h2>Theory and lab.</h2>
      </div>
      <div className="about">
        <span className="num">§ II.1</span>
        <div className="col theory">
          <h3>Theory <span className="code">MSTU 5180</span></h3>
          <p>A reading-and-discussion class about how learning happens, how schooling shapes it, and how technology mediates both. Weekly assignments ask you to take a position grounded in the readings.</p>
          <div className="topics">
            <span className="tag">constructivism</span>
            <span className="tag">constructionism</span>
            <span className="tag">critical pedagogy</span>
            <span className="tag">embodied cognition</span>
            <span className="tag">situated cognition</span>
            <span className="tag">media &amp; tools</span>
          </div>
        </div>
        <div className="col lab">
          <h3>Lab <span className="code">MSTU 5181</span></h3>
          <p>A studio. You'll learn fabrication and prototyping tools while reflecting on your own learning. You'll design and build a working educational technology by the end of the semester.</p>
          <div className="topics">
            <span className="tag">laser cutter</span>
            <span className="tag">3D printing</span>
            <span className="tag">Arduino / GoGo</span>
            <span className="tag">e-textiles</span>
            <span className="tag">interaction design</span>
            <span className="tag">research methods</span>
          </div>
        </div>
      </div>
    </section>
  );
}
window.AboutBlock = AboutBlock;
