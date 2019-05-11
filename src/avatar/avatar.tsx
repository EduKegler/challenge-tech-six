import React from 'react';
interface Viewer {
    avatar: string
}
const Avatar: React.SFC<Viewer> = (props) => {
    return (
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={props.avatar} alt="Placeholder image" />
            </figure>
        </div>
    )
}
export default Avatar;
