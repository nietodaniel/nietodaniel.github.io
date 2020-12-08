export const AllowReRenderTopNavBar = (nextProps, currentProps) => {
  console.log("evaluating top")
  if(nextProps.locale!==currentProps.locale)
    return true;
    if(nextProps.path!==currentProps.path)
    return true;
  if(currentProps.screenType!==nextProps.screenType)
    return true;
  return false;
}

export const AllowReRenderBottomNavBar = (nextProps, currentProps) => {
  console.log("evaluating bottom")
  if(nextProps.locale!==currentProps.locale)
    return true;
  if(currentProps.screenType!==nextProps.screenType)
    return true;
  return false;
}

export const AllowReRenderContent = (nextProps, currentProps) => {
  console.log("evaluating content")
  if(nextProps.path!==currentProps.path){
    return true;
  }
  return false; 
}

export const AllowReRenderHelmet = (nextProps, currentProps) => {
  console.log("evaluating helmet")
  if(nextProps.locale!==currentProps.locale){
    return true;
  }
  return false; 
}