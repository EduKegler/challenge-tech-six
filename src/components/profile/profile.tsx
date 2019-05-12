import React from 'react';
interface Viewer {
    name: string
    login: string
    avatar: string
}
const Profile: React.SFC<Viewer> = ({avatar, name, login}) => {
    return (
        <div className="card">
        <div className="card-image">
            <figure className="image is-4by4">
                <img src={avatar} alt="avatar profile" />
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">{name}</p>
                    <p className="subtitle is-6">{login}</p>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Profile;
