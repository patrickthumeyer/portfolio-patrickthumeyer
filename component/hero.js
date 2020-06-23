import css from "./hero.module.css";

import { Linkedin, Github, Mail } from "./socialIcons";
import { arrowDown } from "./navigationIcons";
import {
  Html,
  Css,
  Sass,
  Bootstrap,
  JavaScript,
  Jquery,
  ReactLogo,
  Mongo,
  NodeJs,
  Npm,
} from "./techIcons";

export default function HelloWorld() {
  const info = {
    name: "Patrick",
    city: "Berlin",
    occupation: "Front-End Developer",
  };

  return (
    <div className={css.hero}>
      <div className={css.wrapper}>
        <div className={css.imageContainer}>
          <div className={css.profileImage}></div>
        </div>
        <div className={css.descriptionContainer}>
          <h1>I'm {info.name}</h1>
          <div className={css.description}>
            I'm a {info.occupation} based in {info.city}. In early 2018 I
            decided it was time for a change. My job as a Business Development
            Manager in Marketing was lacking the potential to inspire me in the
            long run. I decided to jump into Web Development in order to learn a
            new skill which also holds the potential to benefit from my former
            experience and gives me a clearer purpose of what I’m working
            towards in an organisation. I am very excited to tackle all the new
            problems being thrown my way and to dive deeper into the world of
            Web Development.
          </div>
          <div className={css.iconsContainer}>
            <a
              className={css.socialIcon}
              target="_blank"
              href="//github.com/patrickthumeyer"
            >
              <Github />
            </a>
            <a
              className={css.socialIcon}
              target="_blank"
              href="//www.linkedin.com/in/patrickthumeyer/"
            >
              <Linkedin />
            </a>
            <a
              className={css.socialIcon}
              href="mailto:p.thumeyer@gmail.com?Subject=Please enter subject"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>
      <div className={css.expertise}>
        <h2 className={css.techStackHeadline}>Tech Stack: </h2>
        <div className={css.tech}>
          <div className={css.techIconWrapper}>
            <Html />
            <p className={css.techLabel}>HTML</p>
          </div>
          <div className={css.techIconWrapper}>
            <Css />
            <p className={css.techLabel}>CSS</p>
          </div>
          <div className={css.techIconWrapper}>
            <Sass />
            <p className={css.techLabel}>SASS</p>
          </div>
          <div className={css.techIconWrapper}>
            <JavaScript />
            <p className={css.techLabel}>JavaScript</p>
          </div>
          <div className={css.techIconWrapper}>
            <ReactLogo />
            <p className={css.techLabel}>React</p>
          </div>
          <div className={css.techIconWrapper}>
            <Bootstrap />
            <p className={css.techLabel}>Bootstrap</p>
          </div>
          <div className={css.techIconWrapper}>
            <Jquery />
            <p className={css.techLabel}>jQuery</p>
          </div>
          <div className={css.techIconWrapper}>
            <NodeJs />
            <p className={css.techLabel}>Node.js</p>
          </div>
          <div className={css.techIconWrapper}>
            <Mongo />
            <p className={css.techLabel}>MongoDB</p>
          </div>
          <div className={css.techIconWrapper}>
            <Github />
            <p className={css.techLabel}>GitHub</p>
          </div>
          <div className={css.techIconWrapper}>
            <Npm />
            <p className={css.techLabel}>npm</p>
          </div>
        </div>
      </div>
      <div>
        <div className={css.projectHeadlineWrapper}>
          <h3 className={css.projectsArrowHeadline}>Projects</h3>
        </div>
        <arrowDown />
      </div>
    </div>
  );
}
