import React from 'react';
interface Status {
    following: number
    gists: number
}

const Status: React.SFC<Status> = (props) => {
    return (
        <div className="card mt-2">
            <div className="card-header">
                <div className="card-header-title"> Status </div>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="subtitle is-8">Following: <span className="tag is-primary is-rounded">{props.following}</span></p>
                        <p className="subtitle is-8">Gists: <span className="tag is-primary is-rounded">{props.gists}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Status;
