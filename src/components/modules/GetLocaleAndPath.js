const GetURLParts = (path) => {
  if (path.charAt(path.length - 1) === '/')
    path = path.substring(0, path.length - 1);
  if (path.charAt(path.length - 1) === '#')
    path = path.substring(0, path.length - 1);
  if (path.charAt(0) === '/')
    path = path.substring(1)
  const parts = path.split('/');
  return parts
}

const GetLocaleAndPath = (i18n,fullpath) => {
  let locale = i18n.language || window.localStorage.i18nextLng
  let parts = GetURLParts(fullpath)
  let tmpLocale =  parts.shift();
  let faultyLocale=false
  if (tmpLocale !== 'en' && tmpLocale !== 'es'){
    parts = [tmpLocale].concat(parts)
    tmpLocale="en"
    faultyLocale=true
  }
  if (locale !== 'en' && locale !== 'es') {
    if(parts.length>0){   
      locale=tmpLocale
    }else{
      locale='en'
    }
  }
  let path = ""
  path = parts.join("/")
  if(faultyLocale===true){
    window.history.replaceState(null, {}, '/'+locale+"/"+path)
  }
  return {locale:locale,path:path,faultyLocale:faultyLocale}
}

export default GetLocaleAndPath