import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { linksList, projectList, skillList } from "../../lib/resume";
import styles from "./FrontPage.module.scss";

const resumeLinks: React.ReactNode[] = [];
for (const link of linksList) {
  resumeLinks.push(
    <div>
      <a
        href={link.link}
        type="button"
        target="_blank"
        rel="noopener"
        key={link.link}
        className={styles.link}
      >
        <FontAwesomeIcon icon={link.icon} size="2x"></FontAwesomeIcon>
      </a>
    </div>
  );
}

const resumeSkills: React.ReactNode[] = [];
for (const skill of skillList) {
  resumeSkills.push(
    <div className={styles.skill}>
      {skill.isDevicon ? (
        <i className={skill.icon as string} style={{ fontSize: "9rem" }}></i>
      ) : (
        <FontAwesomeIcon
          icon={skill.icon as IconDefinition}
          size="6x"
          style={{ fontSize: "9rem" }}
        ></FontAwesomeIcon>
      )}

      <h3>{skill.name}</h3>
    </div>
  );
}

const resumeProjects: React.ReactNode[] = [];
for (const project of projectList) {
  resumeProjects.push(
    <div>
      <div>
        <h5 style={{ textAlign: "left" }}>
          <strong>{project.title}</strong>
        </h5>
        <p>{project.description}</p>
        <a href={project.sourceUrl} className={styles.link}>
          <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
        </a>
        {project.projectUrl !== undefined ? (
          <a href={project.projectUrl} className={styles.link}>
            <FontAwesomeIcon
              icon={faArrowRight}
              size="2x"
              style={{ marginLeft: "10px" }}
            ></FontAwesomeIcon>
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
export default class FrontPage extends React.Component {
  componentDidMount() {
    document.getElementById("__next")!.classList.add("canvas");
  }

  componentWillUnmount() {
    document.getElementById("__next")!.classList.remove("canvas");
  }

  render() {
    return (
      <>
        <div className={styles.nameHeader}>
          <div className={styles.headerChild}>
            <h1>SamBaumohl.com</h1>
            <h4>Sam Baumohl is a full-stack developer from Missouri.</h4>
            <div aria-label="Site Links" className={styles.siteLinksGroup}>
              {resumeLinks}
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <hr className={styles.line} />
          <h1>Skills</h1>
          <div className={styles.skillParent}>{resumeSkills}</div>
        </div>
        <div className={styles.section}>
          <hr className={styles.line} />
          <h1>Projects</h1>
          <div className={styles.projects}>{resumeProjects}</div>
        </div>
      </>
    );
  }
}
