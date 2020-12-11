
const GetRelativePath = (path,search) => {
  let relpath =""
  if(path==="/" && search.length>1){
    relpath = search
  }else{
    relpath = "/?/" +  path
  }
  return (
    relpath
  )
}
export default GetRelativePath;