const GetLocaleAndPath = (i18n) => {
  let fullPath = window.location.pathname;
  if (fullPath.substr(fullPath.length - 1) === '/')
    fullPath = fullPath.slice(0, -1);
  if (fullPath.substr(fullPath.length - 1) === '#')
    fullPath = fullPath.slice(0, -1);
  const parts = fullPath.split('/');
  if (parts.length > 1) {
    parts.splice(1, 1);
  }
  let path = parts.join('/');
  if (path.length === 0) path = '/';
  let locale =
    i18n.language || window.localStorage.i18nextLng || '';
  if (locale === '') {
    locale = 'en';
  }

  const res ={
    locale: locale,
    path: path
  }
  
  return (
    res
  )
}

export default GetLocaleAndPath;