import { Heading } from "@chakra-ui/react"
import cls from './styles.module.scss'
import { useMenuProps } from "./useMenuProps"

export const Menu = () => {
       const {desc} = useMenuProps()
       return <Heading className={cls.heading}>{desc}</Heading>
}