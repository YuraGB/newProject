import React from 'react';
import { SocialIcon } from 'react-social-icons';

import classes from './SocialsComponent.module.css';

const SocialsComponent: React.FC = (): JSX.Element => {
    return (
        <section className={classes.socials}>
            <SocialIcon network="facebook"  url="http://facebook.com/yura.gurianov"/>
            <SocialIcon network="github"  url="https://github.com/YuraGB"/>
            <SocialIcon network="linkedin"  url="https://www.linkedin.com/in/yurii-hurianov-685373172/"/>
            <SocialIcon network="stackoverflow"  url="https://stackoverflow.com/users/7454797/gorr1995?tab=profile"/>
        </section>
    )
};

export default SocialsComponent;