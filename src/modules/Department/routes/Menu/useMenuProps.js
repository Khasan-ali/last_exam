
import { useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";

export const useMenuProps = () => {
       
       const departUser = useQuery({ queryKey: ['depart'], queryFn: () => request.get('tests').then(res => res.data) })
       
       const array = departUser?.data?.data?.tests
              


       return {array}
}
