import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
    render() {

        const { image, link } = this.props.socialProfile;

        return (
            <div style={{ display: 'inline-block', width: 50, margin: 5}}>
                <a href={link}>
                    <img src={image} alt='social media' style={{ width: 35, height: 35 }} />
                </a>
            </div>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h2>Connect with me at</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(eachSocialMedia => {
                            return (
                                <SocialProfile key={eachSocialMedia.id} socialProfile={eachSocialMedia} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles