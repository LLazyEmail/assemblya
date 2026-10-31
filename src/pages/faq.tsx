import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {useState} from 'react';

import faqEn from '../data/faq.en.json';
import faqUk from '../data/faq.uk.json';

import styles from './faq.module.css';
import type {JSX} from 'react';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

function Faq(): JSX.Element {
  const {i18n} = useDocusaurusContext();
  const items: FaqItem[] = i18n.currentLocale === 'uk' ? faqUk : faqEn;
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <Layout
      title={translate({id: 'faq.meta.title', message: 'FAQ'})}
      description={translate({
        id: 'faq.meta.description',
        message: 'Frequently asked questions about AssemBLYA drop systems.',
      })}>
      <main className={styles.page}>
        <header className={styles.hero}>
          <p className={styles.brand}>AssemBLYA</p>
          <h1 className={styles.title}>
            <Translate id="faq.title">FAQ</Translate>
          </h1>
          <p className={styles.lede}>
            <Translate id="faq.lede">
              Common questions and answers. Placeholder copy for now.
            </Translate>
          </p>
        </header>

        <section className={styles.list} aria-label="FAQ">
          {items.map((item, index) => {
            const isOpen = openId === item.id;
            const panelId = `${item.id}-panel`;
            const buttonId = `${item.id}-button`;

            return (
              <article
                key={item.id}
                className={`${styles.item} ${isOpen ? styles.open : ''}`}
                style={{animationDelay: `${0.05 + index * 0.04}s`}}>
                <h2 className={styles.question}>
                  <button
                    id={buttonId}
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenId((current) =>
                        current === item.id ? null : item.id,
                      )
                    }>
                    <span>{item.question}</span>
                    <i
                      className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'}`}
                      aria-hidden="true"
                    />
                  </button>
                </h2>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </Layout>
  );
}

export default Faq;
