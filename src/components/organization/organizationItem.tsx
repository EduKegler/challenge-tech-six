import React from 'react';
import { Follower, Organization } from '../interface/interface'

interface Props {
    organization: Organization
}
const OrganizationItem: React.FC<Props> = ({ organization }) => {

    return (
        <div className="media">
            <div className="media-left">
                <figure className="image is-48x48">
                    <img src={organization.avatarUrl} alt="Placeholder image" />
                </figure>
            </div>
            <div className="media-content">
                <p className="title is-4">{organization.name}</p>
                <p className="subtitle is-6">{organization.email}</p>
            </div>
        </div>
    )
}

export default OrganizationItem;
