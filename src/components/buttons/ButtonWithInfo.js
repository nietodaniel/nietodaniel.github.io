import React from 'react'
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'
import { useRef, useState } from "react";

const ButtonWithInfo = (buttonClassName,ButtonText,TooltipText,as,clickFun) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const enterEvent = () =>{
      setShow(true)
    }

    const exitEvent = () =>{
      setShow(false)
    }

    const onClickFun = () =>{
      return () => clickFun
    }
  
    return (
      <>
        <span as={as} ref={target} className={buttonClassName} onMouseEnter={enterEvent} onMouseLeave={exitEvent} onClick={onClickFun}>
          {ButtonText}
        </span>
        <Overlay target={target.current} show={show} placement="top">
          {(props) => (
            <Tooltip className="tooltip" {...props}>
              {TooltipText}
            </Tooltip>
          )}
        </Overlay>
      </>
    );
}

export default ButtonWithInfo;