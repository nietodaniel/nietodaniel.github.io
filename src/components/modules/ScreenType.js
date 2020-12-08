const getCurrentScreenType = () => {
    const w= window.screen.width;
    const h = window.screen.height;
    const orientation = h<w;
    let screenSize = '';
    if (w < 768) {
      screenSize = 'xs';
    } else if (w < 992) {
      screenSize = 'sm';
    } else if (w < 1200) {
      screenSize = 'md';
    } else {
      screenSize = 'lg';
    }
    let result = ""
    if (screenSize === 'xs' || screenSize === 'sm'){
        if(orientation===false){
          result = "miniV"
        }else{
          result = "miniH"
        }
    }else{
      result = "normal"
    }

    return result;
}

export {getCurrentScreenType};