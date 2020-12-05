import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Loadingspin = (loadingText, className) => {
    if(className!=="")
        className = ""
  
    return (
    <>
      <div className={"btn"+className}>
        <Spinner
          as="span"
          className=""
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        {loadingText}
      </div>
    </>
  );
}

export default Loadingspin;
