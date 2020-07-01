export const hasAccess = (allowedRoles,userType) => {
   if (allowedRoles.includes(userType))
       return true
    else 
       return false
}







