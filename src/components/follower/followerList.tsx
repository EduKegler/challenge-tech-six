import React, { Component } from 'react';
import { Follower } from '../interface/interface'
import FollowerItem from './followerItem';

interface Props {
    followers: Follower[]
}

class FollowerList extends Component<Props> {


    render() {
        const { followers } = this.props

        // Para ver como fica uma quantia maior de seguidores
        
        followers.push(followers[0])
        followers.push(followers[0])

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
}
export default FollowerList;
