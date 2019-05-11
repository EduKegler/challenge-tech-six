import React from 'react';
import { Repository } from '../interface/interface'

interface Props {
    repository: Repository
}
const RepositoryItem: React.FC<Props> = ({repository}) => {

    return (
        <div className="tile is-child box">
            <p className="title">{repository.name}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Et
                    iam finibus odio quis feugiat facilisis.</p>
        </div>
    )
}

export default RepositoryItem;
