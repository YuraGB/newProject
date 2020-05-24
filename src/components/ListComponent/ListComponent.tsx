/**
 * ListItemComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';

import classes from "./ListItemComponent.module.css";

interface IProps {
    title: string | undefined,
    children: JSX.Element | JSX.Element[] | any,
    link?: string,
    subStyles?: string
}

/**
 * ListItemComponent
 *
 * @param title
 * @param children
 * @param link
 * @param subStyles
 * @return {*}  JSX.Element
 */
const ListItemComponent: React.FC<IProps> = (
    {
        title,
        children,
        link,
        subStyles = ''
    }): JSX.Element => {
    return (
        <li className={classes.ListItem}>
            <div className={[classes.title, subStyles].join(' ')}>
                {link ?
                    <a href={link}>{title}</a> :
                    <span>{title}</span>
                }
            </div>
            {children}
        </li>
    )
};

export default ListItemComponent;