import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import request from "services/httpRequest";
import { authStore } from "store/auth.store";

export const useRegisterProps = () => {

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { register, handleSubmit } = useForm();

  const { mutate } = useMutation({mutationFn: (data) => request.post("auth/register", data)})


  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        authStore.createUsersId(res?.data)
        alert('Iltimos bizning javobimini kuting!')
      }
    })
  };

  return {
    handleClick,
    show,
    register,
    handleSubmit,
    onSubmit
  };
};
