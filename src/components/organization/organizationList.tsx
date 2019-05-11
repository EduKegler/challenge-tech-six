import React, { Component } from 'react';
import { Organization } from '../interface/interface'
import OrganizationItem from './organizationItem'

interface Props {
    organizations: Organization[]
}

class OrganizationList extends Component<Props> {


    render() {
        const { organizations } = this.props

        // Para ver como fica uma quantia maior de seguidores
        
        organizations.push(organizations[0])
        organizations.push(organizations[0])

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
}
export default OrganizationList;
