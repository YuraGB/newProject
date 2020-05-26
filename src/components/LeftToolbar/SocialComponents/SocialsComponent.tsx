import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';

import classes from './SocialsComponent.module.css';

const SocialsComponent: React.FC = (): JSX.Element => {
    return (
        <section className={classes.socials}>
            <SocialMediaIconsReact icon="facebook" iconSize={32} url="http://facebook.com/yura.gurianov"/>
            <SocialMediaIconsReact icon="github" iconSize={32} url="https://github.com/YuraGB"/>
            <SocialMediaIconsReact icon="linkedin" iconSize={32} url="https://www.linkedin.com/in/yurii-hurianov-685373172/"/>
            <SocialMediaIconsReact icon="stackoverflow" iconSize={32} url="https://stackoverflow.com/users/7454797/gorr1995?tab=profile"/>
        </section>
    )
};

export default SocialsComponent;