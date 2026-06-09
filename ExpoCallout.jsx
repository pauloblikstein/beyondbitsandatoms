/* global React */
function ExpoCallout({ setRoute }) {
  return (
    <section className="section" data-screen-label="Expo callout">
      <div className="expo-callout">
        <span className="num">§ III</span>
        <div>
          <h2>Final project.</h2>
        </div>
        <div>
          <p>The joint project for the two courses is a working prototype of a constructionist educational technology, shown at the BB&amp;A Expo, with an accompanying paper suitable for submission to ACM IDC as a Demo Paper.</p>
          <div className="ctas">
            <a className="btn primary" href="#" onClick={e => { e.preventDefault(); setRoute && setRoute('project'); }}>See past projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.ExpoCallout = ExpoCallout;
