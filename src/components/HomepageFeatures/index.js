import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: '工具',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>系统工程的推进需要各种工具来支撑落地。</>,
  },
  {
    title: '语言',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>SysML作为MBSE的主流建模语言，目前被广泛使用。第二版即将推出。</>
    ),
  },
  {
    title: '方法',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>不同组织和领域有不同的建模方法论，需要根据实际情况进行适应和剪裁。</>
    ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
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
  )
}
