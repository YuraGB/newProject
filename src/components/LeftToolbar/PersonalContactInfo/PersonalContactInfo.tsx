/**
 * PersonalContactInfo
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';

import classes from './ContactInfo.module.css'
import ListItemComponent from "../../ListComponent/ListComponent";

interface IContactInfo {
    mobile: string
    email: string
}

const personalInfo: IContactInfo =
    {
        mobile: '0673996678',
        email: 'yuhur1985@gmail.com'
    };


/**
 * PersonalContactInfo
 *
 * @return {*} JSX.Element
 */
const PersonalContactInfo: React.FC = (): JSX.Element => {
    const list = [];

    for (const [key, value] of Object.entries(personalInfo)) {
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

export default PersonalContactInfo;
