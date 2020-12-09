export const AllowReRenderTopNavBar = (nextProps, currentProps) => {
  if(nextProps.locale!==currentProps.locale)
    return true;
    if(nextProps.path!==currentProps.path)
    return true;
  if(currentProps.screenType!==nextProps.screenType)
    return true;
  return false;
}

export const AllowReRenderBottomNavBar = (nextProps, currentProps) => {
  if(nextProps.locale!==currentProps.locale)
    return true;
  if(currentProps.screenType!==nextProps.screenType)
    return true;
  return false;
}

export const AllowReRenderContent = (nextProps, currentProps) => {
  if(nextProps.path!==currentProps.path)
    return true;
  if(currentProps.screenType!==nextProps.screenType)
    return true;
  return false; 
}

export const AllowReRenderHelmet = (nextProps, currentProps) => {
  if(nextProps.locale!==currentProps.locale){
    return true;
  }
  return false; 
}