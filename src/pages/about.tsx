import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import teamEn from '../data/team.en.json';
import teamUk from '../data/team.uk.json';

import styles from './about.module.css';
import type {JSX} from 'react';

type TeamMember = {
  id: string;
  name: string;
  role: string;
  initials: string;
  image?: string;
};

function MemberPortrait({member}: {member: TeamMember}): JSX.Element {
  const imageUrl = useBaseUrl(member.image ?? '/img/logo.svg');

  if (member.image) {
    return (
      <img
        className={styles.photo}
        src={imageUrl}
        alt={member.name}
        loading="lazy"
        width={480}
        height={560}
      />
    );
  }

  return (
    <div className={styles.photoFallback} aria-hidden="true">
      <span>{member.initials}</span>
    </div>
  );
}

function About(): JSX.Element {
  const {i18n} = useDocusaurusContext();
  const members: TeamMember[] =
    i18n.currentLocale === 'uk' ? teamUk : teamEn;

  return (
    <Layout
      title={translate({id: 'about.meta.title', message: 'About us'})}
      description={translate({
        id: 'about.meta.description',
        message:
          'Meet the AssemBLYA team — veterans-led engineers building modular drop systems.',
      })}>
      <main className={styles.page}>
        <header className={styles.hero}>
          <p className={styles.brand}>AssemBLYA</p>
          <h1 className={styles.title}>
            <Translate id="about.title">About us</Translate>
          </h1>
          <p className={styles.lede}>
            <Translate id="about.lede">
              A veterans-led engineering team building modular payload delivery
              systems for units that need simpler, reliable, affordable drop
              gear.
            </Translate>
          </p>
        </header>

        <section className={styles.teamSection} aria-labelledby="about-team-heading">
          <div className={styles.teamIntro}>
            <p className={styles.eyebrow}>
              <Translate id="about.team.eyebrow">Our people</Translate>
            </p>
            <h2 id="about-team-heading" className={styles.sectionTitle}>
              <Translate id="about.team.title">The team behind the systems</Translate>
            </h2>
            <p className={styles.sectionLede}>
              <Translate id="about.team.lede">
                Names and portraits are placeholders for now — replace them in
                the team JSON when ready.
              </Translate>
            </p>
          </div>

          <div className={styles.grid}>
            {members.map((member, index) => (
              <article
                key={member.id}
                className={styles.member}
                style={{animationDelay: `${0.05 + index * 0.04}s`}}>
                <div className={styles.portrait}>
                  <MemberPortrait member={member} />
                </div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default About;
