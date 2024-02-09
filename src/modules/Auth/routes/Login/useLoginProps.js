import { useState } from "react";
import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useMutation } from "@tanstack/react-query"
import request from "services/httpRequest";

export const useLoginProps = () => {

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { register, handleSubmit } = useForm();

  const { mutate } = useMutation({ mutationFn: (data) => request.post("auth/login", data) })

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        authStore.updateUserData({
          access_token: res.data.data.tokens.access_token,
          refresh_token: res.data.data.tokens.refresh_token,
          user_type: res.data.data.user_type
        })
        authStore.login()
      }
    })
  };


  return {
    handleClick,
    show,
    register,
    handleSubmit,
    onSubmit,
  };
};
