import React from 'react';

const Authorisation = (WrappedComponent, allowedRoles, userType) => {
  return class WithAuthorization extends React.Component {
    render() {    
      if (allowedRoles.includes(userType)) {
        return <WrappedComponent {...this.props} userType={userType}/>
      } else {
        return (
          <div>
            {alert("You don't have an access to this page!!")}
          </div>
        )
      }
    }
  }
}

export default Authorisation;
