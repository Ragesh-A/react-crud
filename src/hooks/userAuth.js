export const isLogged = ()=>{
  const user = JSON.parse(localStorage.getItem("user"))
  return user;
}

export const isAdmin = ()=>{
  const user = isLogged()
  
}


