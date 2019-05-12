import React from 'react';
import { Organization } from '../interface/interface'

interface Props {
    organization: Organization
}
const OrganizationItem: React.FC<Props> = ({ organization }) => {

    return (
        <div className="media">
            <div className="media-left">
                <figure className="image is-48x48">
                    <img src={organization.avatarUrl} alt="avatar organization" />
                </figure>
            </div>
            <div className="media-content">
                <p className="title is-6">{organization.name}</p>
            </div>
        </div>
    )
}

export default OrganizationItem;
