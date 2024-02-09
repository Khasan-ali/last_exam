import { Button } from "@chakra-ui/react";
import cls from './styles.module.scss';
import { useProfileProps } from "./useProfileProps";


export const Profile = () => {

       const { handleLogOut } = useProfileProps()

       return <Button colorScheme='red' onClick={handleLogOut}>Log Out</Button>
}