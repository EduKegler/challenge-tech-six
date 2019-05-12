import React from 'react';
import RepositoryItem from './repositoryItem';
import { Repository } from '../interface/interface'

interface Props {
    repositories: Repository[]
}

const RepositoryList: React.FC<Props> = ({ repositories }) => {
    return (
        <div>
            {
                repositories.map((repository, index) => (
                    <div className="media">
                        <div className="tile is-ancestor">
                            <div className="tile is-vertical is-parent">
                                <RepositoryItem key={index} repository={repository} />
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}
export default RepositoryList;
