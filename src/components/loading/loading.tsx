import React from 'react';
import Loader from 'react-loader-spinner'

const Loading: React.SFC = () => {
    return (
        <div className="svg">
          <Loader type="RevolvingDot"
            color="#0d730d"
            height="100"
            width="100" >
          </Loader>
        </div>
    )
}
export default Loading;
