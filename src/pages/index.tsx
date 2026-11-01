import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import type {JSX} from 'react';

function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const heroImage = useBaseUrl('/img/social/hero-unit.png');
  const missionImage = useBaseUrl('/img/mission-field.jpg');
  const ukGettingStarted = useBaseUrl('/docs/getting-started');

  const exploreLinks = [
    {
      title: translate({id: 'home.explore.mission.title', message: 'Mission'}),
      description: translate({
        id: 'home.explore.mission.desc',
        message: 'Why AssemBLYA exists, how we work, and what we optimize for.',
      }),
      to: '/docs/getting-started/mission',
      icon: 'fa-solid fa-compass',
    },
    {
      title: translate({id: 'home.explore.roadmap.title', message: 'Roadmap'}),
      description: translate({
        id: 'home.explore.roadmap.desc',
        message: 'Drop types, cost goals, and the next production milestones.',
      }),
      to: '/docs/specifications/roadmap',
      icon: 'fa-solid fa-map',
    },
    {
      title: translate({
        id: 'home.explore.competitors.title',
        message: 'Competitors',
      }),
      description: translate({
        id: 'home.explore.competitors.desc',
        message:
          'Teardowns and field references from Steel Hornets, Nayavu, and more.',
      }),
      to: '/docs/competitors',
      icon: 'fa-solid fa-binoculars',
    },
    {
      title: translate({id: 'home.explore.houdini.title', message: 'Houdini'}),
      description: translate({
        id: 'home.explore.houdini.desc',
        message: 'Garry Houdini drop documentation, imagery, and related notes.',
      }),
      to: '/docs/specifications/systems/houdini',
      icon: 'fa-solid fa-cube',
    },
  ];

  const principles = [
    {
      title: translate({id: 'home.principle.simpler.title', message: 'Simpler'}),
      text: translate({
        id: 'home.principle.simpler.text',
        message: 'Fewer parts, clearer assembly, faster field repair.',
      }),
    },
    {
      title: translate({
        id: 'home.principle.reliable.title',
        message: 'More reliable',
      }),
      text: translate({
        id: 'home.principle.reliable.text',
        message: 'Every generation should fail less and hold up longer.',
      }),
    },
    {
      title: translate({
        id: 'home.principle.make.title',
        message: 'Easier to make',
      }),
      text: translate({
        id: 'home.principle.make.text',
        message: 'Designed for manufacturing scale, not one-off builds.',
      }),
    },
    {
      title: translate({
        id: 'home.principle.affordable.title',
        message: 'More affordable',
      }),
      text: translate({
        id: 'home.principle.affordable.text',
        message:
          'Cost comes down as the platform gets better — not the other way around.',
      }),
    },
  ];

  const platformItems = [
    {
      title: translate({
        id: 'home.platform.one.title',
        message: 'One modular platform',
      }),
      text: translate({
        id: 'home.platform.one.text',
        message:
          'Replace many specialized drop systems with a shared belly-mounted architecture.',
      }),
    },
    {
      title: translate({
        id: 'home.platform.missions.title',
        message: 'Multiple missions',
      }),
      text: translate({
        id: 'home.platform.missions.text',
        message:
          'From 1–2.5 kg presents to dual drops, gel systems, and infantry packages.',
      }),
    },
    {
      title: translate({
        id: 'home.platform.bulk.title',
        message: 'Bulk for units',
      }),
      text: translate({
        id: 'home.platform.bulk.text',
        message:
          'Built for organizations and partners — standardized production, not retail kits.',
      }),
    },
  ];

  return (
    <Layout
      title={translate({
        id: 'home.meta.title',
        message: 'Modular payload delivery platform',
      })}
      description={translate({
        id: 'home.meta.description',
        message:
          'AssemBLYA is a veterans-led modular payload delivery platform — simpler, more reliable, and more affordable with every generation.',
      })}>
      <main className={styles.page}>
        <section
          className={styles.hero}
          aria-label={translate({
            id: 'home.hero.aria',
            message: 'AssemBLYA introduction',
          })}>
          <div
            className={styles.heroMedia}
            style={{backgroundImage: `url(${heroImage})`}}
            role="img"
            aria-label={translate({
              id: 'home.hero.imageAlt',
              message: 'AssemBLYA drop system mounted under an FPV platform',
            })}
          />
          <div className={styles.heroVeil} />
          <div className={styles.heroInner}>
            {/*<p className={styles.brand}>{siteConfig.title}</p>*/}
           {/* <h2 className={styles.headline}>
              <Translate id="home.hero.headline.line1">One modular platform. </Translate>
              
              <Translate id="home.hero.headline.line2">Many missions.</Translate>
            </h2>
            <p className={styles.lede}>
              <Translate id="home.hero.lede">
                Veterans-led engineering
              </Translate>
            </p>
            <p className={styles.lede}><Translate id="home.hero.lede">
                Payload delivery system that gets simpler, tougher, and cheaper every generation.
              </Translate></p>*/}
            
            <div className={styles.ctaRow}>
              <Link
                className={styles.ctaPrimary}
                to="/docs/getting-started/overview">
                <Translate id="home.hero.cta.overview">Read the overview</Translate>
              </Link>
              <Link
                className={styles.ctaSecondary}
                to="/docs/specifications/roadmap">
                <Translate id="home.hero.cta.roadmap">See the roadmap</Translate>
              </Link>
            </div>
          </div>
        </section>
 <section className={styles.mission}>
   <div className={styles.missionCopy}>
            <p className={styles.sectionEyebrow}>
              <Translate id="home.mission.eyebrow">Veterans-led engineering</Translate>

 
            </p>
            <h2 className={styles.sectionTitle}>
              <Translate id="home.mission.title">
                Payload delivery system that gets simpler, tougher, and cheaper every generation.
              </Translate>
            </h2> 
     <p className={styles.sectionBody}>
              <Translate id="home.mission.body">
               One modular platform. Many missions.
              </Translate>
            </p>
   </div>
 </section>
        <section className={styles.mission}>
          <div className={styles.missionCopy}>
            <p className={styles.sectionEyebrow}>
              <Translate id="home.mission.eyebrow">Why we build</Translate>
            </p>
            <h2 className={styles.sectionTitle}>
              <Translate id="home.mission.title">
                Better equipment saves lives and raises effectiveness.
              </Translate>
            </h2>
            <p className={styles.sectionBody}>
              <Translate id="home.mission.body">
                AssemBLYA is not a margin machine. It is a modular ecosystem aimed
                at units and partners who need reliable drop systems they can
                manufacture, repair, and scale.
              </Translate>
            </p>
            <Link className={styles.textLink} to="/docs/getting-started/mission">
              <Translate id="home.mission.cta">Full mission</Translate>{' '}
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.missionVisual}>
            <img
              src={missionImage}
              alt={translate({
                id: 'home.mission.imageAlt',
                message: 'Concept view of AssemBLYA modular payload platform',
              })}
              loading="lazy"
            />
          </div>
        </section>

        <section className={styles.explore}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionEyebrow}>
              <Translate id="home.explore.eyebrow">Start exploring</Translate>
            </p>
            <h2 className={styles.sectionTitle}>
              <Translate id="home.explore.title">Documentation built for builders</Translate>
            </h2>
            <p className={styles.sectionBody}>
              <Translate id="home.explore.body">
                Jump straight into mission context, roadmap, competitor references,
                or hardware notes.
              </Translate>
            </p>
          </div>
          <div className={styles.exploreGrid}>
            {exploreLinks.map((item) => (
              <Link key={item.to} className={styles.exploreCard} to={item.to}>
                <span className={styles.exploreIcon} aria-hidden="true">
                  <i className={item.icon} />
                </span>
                <span className={styles.exploreTitle}>{item.title}</span>
                <span className={styles.exploreDesc}>{item.description}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.principles}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionEyebrow}>
              <Translate id="home.principles.eyebrow">Principles</Translate>
            </p>
            <h2 className={styles.sectionTitle}>
              <Translate id="home.principles.title">Every new version should be</Translate>
            </h2>
          </div>
          <ul className={styles.principleList}>
            {principles.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.platform}>
          <div className={styles.platformIntro}>
            <p className={styles.sectionEyebrow}>
              <Translate id="home.platform.eyebrow">Platform</Translate>
            </p>
            <h2 className={styles.sectionTitle}>
              <Translate id="home.platform.title">
                Built as an ecosystem, not a one-off drop
              </Translate>
            </h2>
            <p className={styles.sectionBody}>
              <Translate id="home.platform.body">
                Shared architecture under the drone belly. Sensors, servos, and
                3D parts that can grow into many payload configurations.
              </Translate>
            </p>
          </div>
          <div className={styles.platformGrid}>
            {platformItems.map((item) => (
              <article key={item.title} className={styles.platformItem}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.closing}>
          <h2 className={styles.closingTitle}>
            <Translate id="home.closing.title">Ready to dig in?</Translate>
          </h2>
          <p className={styles.closingBody}>
            <Translate id="home.closing.body">
              Start with the overview, or switch to Ukrainian with the language
              menu in the navbar.
            </Translate>
          </p>
          <div className={styles.ctaRow}>
            <Link className={styles.ctaPrimary} to="/docs/getting-started">
              <Translate id="home.closing.cta.start">Getting started</Translate>
            </Link>
            <Link className={styles.ctaSecondary} to={ukGettingStarted}>
              <Translate id="home.closing.cta.uk">Українською</Translate>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
