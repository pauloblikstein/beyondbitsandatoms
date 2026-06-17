/* global React */
function HoursAndSlack() {
  return (
    <section className="section" data-screen-label="Office hours">
      <div className="section-head">
        <span className="num">§ IV</span>
        <h2>Office hours.</h2>
      </div>
      <div className="hours">
        <span className="num">§ IV.1</span>
        <div className="card oh">
          <div className="label">In person</div>
          <h4>Office hours</h4>
          <p>No appointment. Bring whatever you're working on.</p>
          <div className="meta">Thursdays 2:00 – 4:00 pm · Macy 444</div>
        </div>
        <div className="card slack">
          <div className="label">Online</div>
          <h4>Slack channel</h4>
          <p>Quick questions, links you found, photos of what you made last night. Alumni and current cohort live here.</p>
          <div className="meta">beyondbitsandatoms.slack.com</div>
        </div>
      </div>
    </section>
  );
}
window.HoursAndSlack = HoursAndSlack;
