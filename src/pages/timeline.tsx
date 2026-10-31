import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import timelineEn from '../data/timeline.en.json';
import timelineUk from '../data/timeline.uk.json';

import styles from './timeline.module.css';
import type {JSX} from 'react';

type TimelineItem = {
  id: string;
  title: string;
  body: string;
};

type TimelineSection = {
  year: string;
  items: TimelineItem[];
};

function Timeline(): JSX.Element {
  const {i18n} = useDocusaurusContext();
  const sections: TimelineSection[] =
    i18n.currentLocale === 'uk' ? timelineUk : timelineEn;

  return (
    <Layout
      title={translate({id: 'timeline.meta.title', message: 'Timeline'})}
      description={translate({
        id: 'timeline.meta.description',
        message: 'AssemBLYA timeline — milestones and project history.',
      })}>
      <main className={styles.page}>
        <header className={styles.hero}>
          <p className={styles.brand}>AssemBLYA</p>
          <h1 className={styles.title}>
            <Translate id="timeline.title">Timeline</Translate>
          </h1>
          <p className={styles.lede}>
            <Translate id="timeline.lede">
              Project milestones by year. Placeholder content for now.
            </Translate>
          </p>
        </header>

        <div className={styles.timeline}>
          {sections.map((section, sectionIndex) => (
            <section
              key={section.year}
              className={styles.section}
              style={{animationDelay: `${0.06 + sectionIndex * 0.05}s`}}>
              <div className={styles.sectionTitle}>{section.year}</div>
              <div className={styles.sectionContent}>
                {section.items.map((item) => (
                  <article key={item.id} className={styles.article}>
                    <aside className={styles.rail} aria-hidden="true">
                      <div className={styles.dot} />
                      <div className={styles.line} />
                    </aside>
                    <div className={styles.content}>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <p className={styles.itemBody}>{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Timeline;
