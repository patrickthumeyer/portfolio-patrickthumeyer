import css from "./projectListElement.module.css";

const ProjectListElement = ({ title, projectImage, pageLink, codeLink }) => (
  // <Link href="/projects/[slug]" as={`/projects/${slug}`}>
  <a>
    <div className={css.projectWrapper}>
      <div className={css.imgWrapper}>
        <img className={css.projectImage} src={projectImage} />
      </div>
      <div className={css.detailsWrapper}>
        <h1 className={css.title}>{title}</h1>
        <div className={css.buttonWrapper}>
          <a className={css.button} href={pageLink}>
            Site
          </a>
          <a className={css.button} href={codeLink}>
            Code
          </a>
        </div>
      </div>
    </div>
  </a>
);

export default ProjectListElement;
