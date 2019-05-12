import React from 'react';
import { Follower } from '../interface/interface'
import FollowerItem from './followerItem';

interface Props {
    followers: Follower[]
}

const FollowerList: React.FC<Props> = ({ followers }) => {
    return (
        <div className="card mt-2">
            <div className="card-header">
                <div className="card-header-title"> Followers </div>
            </div>
            <div className="card-content">
                {followers.map((follower, index) => (
                    <FollowerItem follower={follower} />
                ))}
            </div>
        </div>
    )
}
export default FollowerList;
