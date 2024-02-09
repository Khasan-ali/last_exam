import { Heading } from "@chakra-ui/react"
import cls from './styles.module.scss'
import { useTestProps } from "./useTestProps"

export const Test = () => {
       const {desc} = useTestProps()
       return <Heading className={cls.heading}>{desc}</Heading>
}