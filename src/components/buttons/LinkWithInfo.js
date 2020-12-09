import React from 'react'
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'
import { useRef, useState } from "react";

const LinkWithInfo = (buttonClassName,ButtonText,TooltipText,as,href,isTblank) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    let tblank = ""
    if(isTblank===true)
    tblank="_blank"

    const enterEvent = () =>{
      setShow(true)
    }

    const exitEvent = () =>{
      setShow(false)
    }
    
    return (
      <>
        <a as={as} ref={target} className={"infolink "+buttonClassName} href={href} onMouseEnter={enterEvent} target={tblank} onMouseLeave={exitEvent} >
          {ButtonText}
        </a>
        <Overlay target={target.current} show={show} placement="top">
          {(props) => (
            <Tooltip className="" {...props}>
              {TooltipText}
            </Tooltip>
          )}
        </Overlay>
      </>
    );
}

export default LinkWithInfo;