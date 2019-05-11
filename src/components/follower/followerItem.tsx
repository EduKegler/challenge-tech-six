import React from 'react';
import { Follower } from '../interface/interface'

interface Props {
    follower: Follower
}
const FollowerItem: React.FC<Props> = ({ follower }) => {

    return (
        <div className="media">
            <div className="media-left">
                <figure className="image is-48x48">
                    <img src={follower.avatarUrl} alt="Placeholder image" />
                </figure>
            </div>
            <div className="media-content">
                <p className="title is-4">{follower.name}</p>
                <p className="subtitle is-6">{follower.email}</p>
            </div>
        </div>
    )
}

export default FollowerItem;
