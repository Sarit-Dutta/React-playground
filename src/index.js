import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "Wall-Crawl",
    level: "Professional",
    color: "#2662EA"
  },
  {
    skill: "Web-Slinging",
    level: "Professional",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "Professional",
    color: "#C3DCAF"
  },
  {
    skill: "Hit and GetHit",
    level: "Advanced",
    color: "#E84F33"
  },
  {
    skill: "React (Spider-Sense)",
    level: "Godly",
    color: "#60DAFB"
  }
];

function Avatar() {
  return (
    <div className="avatar">
      <img src="IASIP_spiderman.jpeg" alt="Fake Avatar"></img>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <p>
        All right, let's do this one last time. My name is Peter Parker. I was
        bitten by a radioactive spider, and for ten years I've been the one and
        only Spider-Man. I'm pretty sure you know the rest. I saved a bunch of
        people, fell in love, saved the city, and then I saved the city again...
        and again and again and again. And I, uh... I did this.
      </p>
      <br />
      <p>[shot of Spidey doing the emo dance from "Spider-Man 3"]</p>
      <br />
      <p>
        We don't really talk about this. Look, I'm a comic book, I'm a cereal,
        did a Christmas album. I have an excellent theme song. And a so-so
        popsicle. I mean, I've looked worse. But after everything, I still love
        being Spider-Man. I mean, who wouldn't? So no matter how many hits I
        take, I always find a way to come back. Because the only thing standing
        between this city and oblivion is me. There's only one Spider-Man. And
        you're looking at him.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  var emoji;
  if (skill.level === "Professional" || skill.level === "Godly") emoji = "🕷";
  else emoji = "👱‍♂️";
  const backGroundStyle = {
    backgroundColor: skill.color
  };
  return (
    <div style={backGroundStyle} className="skill">
      <span>{skill.skill}</span>
      <span>
        {(skill.level === "Professional" || skill.level === "Godly") && "🕷"}
        {skill.level !== "Professional" && skill.level !== "Godly" && "👱‍♂️"}
      </span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <h1>Peter (Charlie Day) Parker</h1>
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
