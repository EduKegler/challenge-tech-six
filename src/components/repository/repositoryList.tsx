import React, { Component } from 'react';
import RepositoryItem from './repositoryItem';
import { Repository } from '../interface/interface'

interface Props {
    repositories: Repository[]
}

class RepositoryList extends Component<Props> {

    componentDidMount() { }

    render() {
        const { repositories } = this.props

        return (
            <div>
                {
                    repositories.map((repository, index) => (
                        <div className="media">
                            <div className="tile is-ancestor">
                                <div className="tile is-vertical is-parent">
                                    <RepositoryItem repository={repository} />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }
}

export default RepositoryList;
