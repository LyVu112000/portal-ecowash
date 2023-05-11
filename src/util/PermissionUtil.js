import jwtDecode from "jwt-decode"

const PermissionUtil = {
    parseAccessToken(){
        if(localStorage.accessToken){
            let userToken = jwtDecode(localStorage.accessToken)
            let roles = userToken?.roles
            let resourceAccess = userToken?.resourceAccess
            return {roles, resourceAccess}
        }
      
        return {}
    },

    viewResourceMenu(menu){
        let {resourceAccess} = this.parseAccessToken()

        if(!resourceAccess){
            return false
        }

        let permissionView = resourceAccess?.ops[menu]

        if(!permissionView){
            return false
        }

        return true
    },

    checkPermissionAction(menu, action) {
        let {resourceAccess} = this.parseAccessToken()
        let permissionView = resourceAccess?.ops[menu]

        if(!permissionView){
            return false
        }

        return permissionView.includes(action)
    }
}

export default PermissionUtil