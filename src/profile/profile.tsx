import React from 'react';
interface Viewer {
    name: string
    login: string
}
const Profile: React.SFC<Viewer> = (props) => {
    return (
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">{props.name}</p>
                    <p className="subtitle is-6">{props.login}</p>
                </div>
            </div>
            <div className="content">
                <span>OII</span>
            </div>
        </div>
    )
}
export default Profile;
