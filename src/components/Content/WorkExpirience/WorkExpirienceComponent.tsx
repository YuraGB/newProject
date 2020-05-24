import React from 'react';

import ContentSection from "../ContentSection/ContentSection";
import classes from './WorkComponent.module.css';
import ListItemComponent from "../../ListComponent/ListComponent";

const work = [
    {
        company: {
            title: "Smile",
            profession: "Front-end developer",
            period: "03/2018 - till now.",
            projects: [
                {
                    url: 'https://www.maxitoys.com/',
                    role: 'front-end developer',
                    description: `Team: 3 front-end developers, 2 back-end developers, 1 PM, 2 testers.
                     Duties: Magento modules creation, styles for multiple elements, fixing front-end bugs,
                     js-widgets creating, working with knokoutjs.`
                },
                {
                    url: 'https://www.editions-legislatives.fr/',
                    role: 'front-end developer',
                    description: `Team: 2 front-end developers, 3 back-end developers, 1 PM, 2 testers.
                     Duties: Magento modules creation, styles for multiple elements, fixing front-end bugs,
                     js-widgets creating, working with knokoutjs.`
                },
                {
                    url: 'https://www.alimentarium.org/en',
                    role: 'front-end developer',
                    description: `Team: 2 front-end developers, 1 back-end developers, 1 PM, 2 testers.
                     Duties: Drupal 7 re-design front-end development, styles for multiple elements, 
                     fixing front-end bugs.`
                },
                {
                    url: 'https://www.obrist.ch/fr',
                    role: 'front-end developer',
                    description: `
                    NOTE: The development of the web site is still in progress. This is an 'old' url of the web site.
                    Team: 2 front-end developers, 2 back-end developers, 1 PM, 2 testers.                    
                     Duties: Magento modules creation, styles for multiple elements, fixing front-end bugs,
                     js-widgets creating, working with knokoutjs.`
                }
            ]
        }
    },
    {
        company: {
            title: "TOV SAUZ",
            period: "06/2015 - 09/2017 ",
            profession: "accountant"
        }
    },
    {
        company: {
            title: "TOV Terko Auto",
            period: "11/2007 - 08/2014",
            profession: "accountant"
        }
    }
];

const WorkExpirienceComponent:React.FC = (): JSX.Element => {
    const list = work.map( (el) =>
        <ListItemComponent title={el.company.title} subStyles={classes.title}>
            <div className={classes.info}>
                <span>{el.company.profession}</span>
                <span className={classes.period}>{el.company.period}</span>
            </div>
            {el.company.projects && (
                <div className={classes.projects}>
                    <h5 className={classes.subTitle}>Projects:</h5>
                    <ul>
                        {el.company.projects.map(el => (
                        <ol>
                            <a href={el.url} className={classes.url}>{el.url}</a>

                            <div className={classes.description}>
                                <p>{el.description}</p>
                            </div>
                        </ol>

                ))}
                    </ul>
                </div>
            )}
        </ListItemComponent>
    );

    return (
        <ContentSection title='Work experience'>
            <ul>
                {list}
            </ul>
        </ContentSection>
    )
};

export default WorkExpirienceComponent;