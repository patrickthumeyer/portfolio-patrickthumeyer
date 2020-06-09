import css from "./hero.module.css";

import { Linkedin, Github, Mail } from "./socialIcons";

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
              className="socialIcon"
              target="_blank"
              href="//github.com/patrickthumeyer"
            >
              <Github />
            </a>
            <a
              className="socialIcon"
              target="_blank"
              href="//www.linkedin.com/in/patrickthumeyer/"
            >
              <Linkedin />
            </a>
            <a
              className="socialIcon"
              href="mailto:p.thumeyer@gmail.com?Subject=Please enter subject"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>
      <div className={css.expertise}>
        <h2>
          Current fields of expertise:{" "}
          <span>
            JS, React, HTML, CSS3, SASS, Bootstrap, Handlebars, NodeJS
          </span>
        </h2>
      </div>
    </div>
  );
}
