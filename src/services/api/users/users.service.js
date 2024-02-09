import { useQueryClient } from "@tanstack/react-query";
import request from "services/httpRequest";


const usersServices = { getUsers: () => request.get("/users").then(res => res.data), };

export const useGetUsers = (settings) => {
  return useQueryClient("GET/USERS", usersServices.getUsers, settings);
};