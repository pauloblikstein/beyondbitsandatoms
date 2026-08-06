/* global React */
function ProjectPage() {
  const projects = [
    {
      yr: '2025', t: 'Forest Fire',
      team: 'Maya R. · Jordan L.',
      tags: ['CV', 'board game', 'simulation'],
      photo: '../assets/photos/project-forest-fire.png',
      desc: `A wooden board, red and blue tokens, and a webcam-driven simulation. Players model containment vs. spread; the computer reads the grid and runs the fire. Designed for ages 10–14 to make abstract dynamics tangible — a tabletop reads as a state machine, students see immediately how their decisions propagate through the system. Built over twelve weeks: the board was laser-cut from birch ply, the tokens 3D-printed in two colors, and the recognition pipeline trained from a hundred classroom photos. A paper submitted to IDC '25 documents three pilot studies in middle-school classrooms. The board is the metaphor; the simulation is the engine; the conversation around the table is the curriculum. Students moved from prediction to revision to abstraction across forty-minute sessions, and the artifact ended each class on a different table — propped against a window, held by two kids running it again. The authors continued the work as a master's thesis on tangible-computational hybrids.`,
      links: { paper: '#', video: '#', site: '#', more: '#' },
    },
    {
      yr: '2024', t: 'Sentient Toolbox',
      team: 'Alex K. · Sam B.',
      tags: ['Raspberry Pi', 'tangibles', 'sound'],
      photo: '../assets/photos/watercolor-pi-toolbox.png',
      desc: `A pink toolbox of tangible inputs wired to a Raspberry Pi. Children compose ambient soundscapes by plugging cables, dials and buttons into a soft case — the toolbox itself becomes the instrument, and the act of opening it announces the start of a making session. The team prototyped seven different input modules (a slide potentiometer, two rotary dials, three momentary buttons, a small breadboard) and refined the form factor across four field tests with the Lower East Side Girls Club. A short paper at the IDC '24 demo track documents the iteration. The authors argued explicitly against the "lone genius coder" framing — the toolbox is meant to be opened by multiple hands at once, with assignments and disagreements rotating around the table. The Pi runs Pure Data; cables are XLR for durability; the case is felt-lined and the lid is upholstered. A second version, in development, replaces XLR with magnetic Pogo-pin connectors so younger children can plug in without forcing.`,
      links: { paper: '#', video: '#', site: '#', more: '#' },
    },
    {
      yr: '2024', t: 'Zine Studio',
      team: 'Imani O. · Asha D.',
      tags: ['print', 'composition', 'craft'],
      photo: '../assets/photos/project-zines.png',
      desc: `A workshop kit of pre-cut zine templates, stencils, and a small printing manual. Students prototype their own field guides, manifestos and instruction-cards as a way to take a position before they take a measurement. The project pulls from Latina/o critical pedagogies and from the long tradition of educational zines in Brazilian classrooms (one of the authors first learned to read with mimeographed booklets). The kit ships in five colors of cardstock plus a roll of book-binding tape; the templates are PDFs licensed CC-BY and posted on the project's GitHub. A short paper documents two cycles of co-design with a 7th-grade humanities class in Inwood. The authors specifically critiqued the gap between "maker" and "writer" in many constructionist programs — zines, they argued, sit comfortably across both, and ask students to compose meaning the way a designer composes a page. Several student zines have circulated as their own small editions.`,
      links: { paper: '#', site: '#', more: '#' },
    },
    {
      yr: '2023', t: 'Unfinished Horse',
      team: 'Lucas T.',
      tags: ['drawing', 'media literacy'],
      photo: '../assets/photos/project-horse-card.jpg',
      desc: `A card-game that asks students to interpret the same image at three levels of "finish" — pencil sketch, ink wash, photo. A small lesson in how images make meaning, and a way to introduce visual literacy to a younger audience without lecture. The deck of forty cards is screen-printed two-color; the rules fit on a single index card. Designed for two-to-six players, ages eight and up, in fifteen-to-twenty-minute sessions. The author piloted with two after-school programs in Harlem and a Saturday class at Teachers College, then ran a structured interview with each participant about the cards that stuck with them. A short paper at IDC '23 reports on the gap between what children find "complete" in an image and what curators do. The deck has continued in informal circulation among art teachers.`,
      links: { paper: '#', video: '#', more: '#' },
    },
    {
      yr: '2023', t: 'Paper Circuits Kit',
      team: 'Ben P. · Priya M.',
      tags: ['fabrication', 'electronics', 'elementary'],
      desc: `A workbook of paper-and-copper-tape templates: students build working circuits as illustrated stories. Designed with a 3rd-grade classroom in Manhattan, with explicit attention to the constraints of a classroom that has no soldering iron. Eighteen project sheets, each paired with a one-page reading at a 3rd-grade reading level. The authors built a small low-current battery clip from laser-cut acrylic to keep the assemblies cheap and re-runnable. Co-developed across five sessions with the lead teacher; revised based on session transcripts and a small pre/post test. The paper compares the kit to two commercial alternatives and argues for low-cost, classroom-modifiable materials. The kit is now used in three TC partner schools.`,
      links: { paper: '#', more: '#' },
    },
    {
      yr: '2022', t: 'Folktale Engine',
      team: 'Yu N.',
      tags: ['narrative', 'language', 'AI'],
      desc: `A constructionist authoring tool for children to assemble folktales from culturally-specific motifs. Critiques the assumption that LLMs should write stories for kids — instead, the engine assembles human-authored fragments under the child's direction, and asks the child to commit to particular choices. Built in React + Phaser; six tale-traditions packaged (Anansi, Norse, Polish, Mahabharata, Yoruba and an Inuit cycle). The interface lets a child name a hero, swap a setting, replace an antagonist; the result reads as a small printed booklet they can take home. Tested in three settings: an after-school program, a multilingual classroom, and a one-on-one with the author's own niece. The paper sits in conversation with critical work on AI and child-readers.`,
      links: { paper: '#', site: '#', more: '#' },
    },
  ];

  return (
    <div data-screen-label="Page · Final project">
      <section className="section first">
        <div className="project-grid-2">
          {projects.map(p => <ProjectCard key={p.t} {...p}/>)}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ yr, t, team, tags, desc, photo, links = {} }) {
  return (
    <article className="proj-card-lg">
      <div className="proj-photo-lg">
        {photo
          ? <img src={photo} alt={t} />
          : <div className="proj-photo-placeholder"></div>}
      </div>
      <div className="proj-body-lg">
        <div className="proj-meta">
          <span className="proj-year">{yr}</span>
          <span className="proj-sep">·</span>
          <span>BB&amp;A Expo</span>
        </div>
        <h3>{t}</h3>
        <p className="proj-team">{team}</p>
        <p className="proj-desc">{desc}</p>
        <div className="proj-tags">
          {tags.map(tag => <span className="proj-tag" key={tag}>{tag}</span>)}
        </div>
        <div className="proj-links">
          {links.paper && <a href={links.paper} className="proj-link">↗ Paper</a>}
          {links.video && <a href={links.video} className="proj-link">↗ Video</a>}
          {links.site  && <a href={links.site}  className="proj-link">↗ Site</a>}
          {links.more  && <a href={links.more}  className="proj-link proj-link-more">More about this project →</a>}
        </div>
      </div>
    </article>
  );
}

window.ProjectPage = ProjectPage;
