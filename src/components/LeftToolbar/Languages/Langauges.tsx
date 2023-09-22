/**
 * Languages
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';

import classes from '../PersonalContactInfo/ContactInfo.module.css'
import ListItemComponent from "../../ListComponent/ListComponent";

interface ILanguages {
  [key: string]: string
}

const languagesData: ILanguages =
    {
        English: 'Upper-intermediate',
        Ukrainian: 'Native'
    };


/**
 * Languages
 *
 * @return {*} JSX.Element
 */
const Languages: React.FC = (): JSX.Element => {
    const list = [];

    for (const [key, value] of Object.entries(languagesData)) {
        list.push(
            <ListItemComponent key={key} title={key} subStyles={classes.title}>
                <div className={classes.info}>
                    <span>{value}</span>
                </div>
            </ListItemComponent>
        );
    }

    return (
        <ul className={classes.ContactList}>
            {list}
        </ul>
    );
};

export default Languages;
