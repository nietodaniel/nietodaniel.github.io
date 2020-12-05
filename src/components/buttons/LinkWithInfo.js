import React from 'react'
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'
import { useRef, useState } from "react";

const LinkWithInfo = (buttonClassName,ButtonText,TooltipText,as,href) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const enterEvent = () =>{
      setShow(true)
    }

    const exitEvent = () =>{
      setShow(false)
    }
    
    return (
      <>
        <a as={as} ref={target} className={"infolink "+buttonClassName} href={href} onMouseEnter={enterEvent} onMouseLeave={exitEvent} >
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