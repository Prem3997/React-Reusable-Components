export const isLogin = () => {
      if (localStorage.getItem("loggedIn") === 'true')
        return true
     else 
        return false
}



  