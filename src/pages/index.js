import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero ", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h1 className="hero__title text--left">{siteConfig.title}</h1>
            <p className="hero__subtitle text--left">{siteConfig.tagline}</p>

            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro"
              >
                DEMO
              </Link>
              &nbsp;
              <Link
                className="button button--primary button--lg"
                to="/docs/intro"
              >
                SIGN UP, IT IS FREE!
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <img src="/static/img/people.png" alt="Captisa Forms" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Create online forms the easy way."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
