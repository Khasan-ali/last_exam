import { Box, Heading } from "@chakra-ui/react"
import cls from './styles.module.scss'
import { useMenuProps } from "./useMenuProps"

export const Menu = () => {
       const {array} = useMenuProps()
       return <Box>
              <ul>
                     {array?.map((row, index) => (
                            <li key={index}>{row?.subject?.title}</li>
                     ))}
              </ul>
       </Box>
}