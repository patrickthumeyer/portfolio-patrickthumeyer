import Hero from "../component/hero";
import css from "./index.module.css";

import ProjectListElement from "../component/projectListElement";

import projects from "../content/projects.json";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className={css.mainProjectsWrapper}>
        {projects.map(ProjectListElement)}
      </div>
    </main>
  );
}
