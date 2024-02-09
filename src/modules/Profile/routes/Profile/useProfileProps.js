import { authStore } from "store/auth.store"


export const useProfileProps = () => {

       const handleLogOut = () => {
              authStore.userData = {}
              authStore.logout()
       }

       return {handleLogOut}
}