import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';

import styles from './pricing.module.css';
import type {JSX} from 'react';

type Plan = {
  id: string;
  name: string;
  quantity: string;
  priceLabel: string;
  priceNote: string;
  features: string[];
  ctaLabel: string;
  ctaTo: string;
  ctaExternal?: boolean;
  featured?: boolean;
};

function Pricing(): JSX.Element {
  const plans: Plan[] = [
    {
      id: 'pack-10',
      name: translate({id: 'pricing.plan10.name', message: '10 Drop Systems'}),
      quantity: translate({
        id: 'pricing.plan10.quantity',
        message: 'Buy 10 drop systems',
      }),
      priceLabel: translate({
        id: 'pricing.plan10.price',
        message: '3000 UAH',
      }),
      priceNote: translate({
        id: 'pricing.plan10.note',
        message: 'per item',
      }),
      features: [
        translate({id: 'pricing.feature1', message: 'feature1'}),
        translate({id: 'pricing.feature2', message: 'feature2'}),
        translate({id: 'pricing.feature3', message: 'feature3'}),
      ],
      ctaLabel: translate({id: 'pricing.cta.order', message: 'Order'}),
      ctaTo: '/docs/user-guide/orders',
    },
    {
      id: 'pack-20',
      name: translate({id: 'pricing.plan20.name', message: '20 Drop Systems'}),
      quantity: translate({
        id: 'pricing.plan20.quantity',
        message: 'Order 20 drop systems',
      }),
      priceLabel: translate({
        id: 'pricing.plan20.price',
        message: '2000 UAH',
      }),
      priceNote: translate({
        id: 'pricing.plan20.note',
        message: 'per item',
      }),
      features: [
        translate({id: 'pricing.feature1', message: 'feature1'}),
        translate({id: 'pricing.feature2', message: 'feature2'}),
        translate({id: 'pricing.feature3', message: 'feature3'}),
        translate({id: 'pricing.feature4', message: 'feature4'}),
      ],
      ctaLabel: translate({id: 'pricing.cta.order', message: 'Order'}),
      ctaTo: '/docs/user-guide/orders',
      featured: true,
    },
    {
      id: 'unlimited',
      name: translate({
        id: 'pricing.planUnlimited.name',
        message: 'Unlimited Plan',
      }),
      quantity: translate({
        id: 'pricing.planUnlimited.quantity',
        message: '30 and more drop systems',
      }),
      priceLabel: translate({
        id: 'pricing.planUnlimited.price',
        message: 'Custom',
      }),
      priceNote: translate({
        id: 'pricing.planUnlimited.note',
        message: 'volume pricing',
      }),
      features: [
        translate({id: 'pricing.feature1', message: 'feature1'}),
        translate({id: 'pricing.feature2', message: 'feature2'}),
        translate({id: 'pricing.feature3', message: 'feature3'}),
        translate({id: 'pricing.feature4', message: 'feature4'}),
        translate({id: 'pricing.feature5', message: 'feature5'}),
      ],
      ctaLabel: translate({
        id: 'pricing.cta.contact',
        message: 'Contact us',
      }),
      ctaTo: 'mailto:',
      ctaExternal: true,
    },
  ];

  return (
    <Layout
      title={translate({id: 'pricing.meta.title', message: 'Pricing'})}
      description={translate({
        id: 'pricing.meta.description',
        message:
          'AssemBLYA drop system pricing — packs of 10, 20, or 30+ units.',
      })}>
      <main className={styles.page}>
        <header className={styles.hero}>
          <p className={styles.brand}>AssemBLYA</p>
          <h1 className={styles.title}>
            <Translate id="pricing.title">Pricing</Translate>
          </h1>
          <p className={styles.lede}>
            <Translate id="pricing.lede">
              Choose a pack size for drop systems. Features are placeholders
              for now.
            </Translate>
          </p>
        </header>

        <section className={styles.grid} aria-label="Pricing plans">
          {plans.map((plan, index) => (
            <article
              key={plan.id}
              className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
              style={{animationDelay: `${0.08 + index * 0.08}s`}}>
              <h2 className={styles.planName}>{plan.name}</h2>
              <p className={styles.quantity}>{plan.quantity}</p>
              <p className={styles.price}>
                <span className={styles.priceValue}>{plan.priceLabel}</span>
                <span className={styles.priceNote}>{plan.priceNote}</span>
              </p>
              <ul className={styles.features}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <i className="fa-solid fa-check" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.ctaExternal ? (
                <a className={styles.cta} href={plan.ctaTo}>
                  {plan.ctaLabel}
                </a>
              ) : (
                <Link className={styles.cta} to={plan.ctaTo}>
                  {plan.ctaLabel}
                </Link>
              )}
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}

export default Pricing;
