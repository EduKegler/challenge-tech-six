import React from 'react';
import { Organization } from '../interface/interface'
import OrganizationItem from './organizationItem'

interface Props {
    organizations: Organization[]
}

const OrganizationList: React.FC<Props> = ({ organizations }) => {
    return (
        <div className="card mt-2">
            <div className="card-header">
                <div className="card-header-title"> Organizations </div>
            </div>
            <div className="card-content">
                {organizations.map((organization, index) => (
                    <OrganizationItem organization={organization} />
                ))}
            </div>
        </div>
    )
}
export default OrganizationList;
