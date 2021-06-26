import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Client Portal",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Create Portals For Your Clients In Minutes. Share multiple forms with
        people outside of your organization.
      </>
    )
  },
  {
    title: "Automate Document Creation",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Automate document creation using Captisa Word Template, send PDF
        documents as email attachments, download PDF or Word documents. Generate
        multiple custom PDF or Word documents from a single form or linked
        forms.
      </>
    )
  },
  {
    title: "Audit Log",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: <>Keep track of all the changes made to forms by your users.</>
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
