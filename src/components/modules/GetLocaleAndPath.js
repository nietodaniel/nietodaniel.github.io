const GetURLParts = (path) => {
  let parts = path.split('/');
  const noEmpty = parts.filter(function(e) { return e !== '' })
  const noQ = noEmpty.filter(function(e) { return e !== '?' })
  const clean = noQ.filter(function(e) { return e !== '#' })
  return clean
}

const GetLocaleAndPath = (i18n,locationObj) => {
  console.log("Original path: ",locationObj)
  const pathname = locationObj.pathname
  const search = locationObj.search+locationObj.hash
  const relativepath = pathname+search
  let oldlocale = i18n.language || window.localStorage.i18nextLng
  let parts = GetURLParts(relativepath)
  let locale =  parts.shift();
  let faultyLocale=false
  if (locale !== 'en' && locale !== 'es'){
    console.error("ERROR: locale is... "+locale+" changing to... "+oldlocale)
    locale=oldlocale
  }
  const partstwo = ["","?",locale].concat(parts)
  const newpath = partstwo.join("/")

  if(newpath!==relativepath){
    console.error("Modifying path: "+relativepath+" changing to... "+newpath)
    window.history.replaceState(null, {}, newpath)
  }
  return {locale:locale,path:newpath,faultyLocale:faultyLocale}
}

export default GetLocaleAndPath