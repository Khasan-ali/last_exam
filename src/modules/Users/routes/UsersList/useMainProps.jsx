import { Button } from "@chakra-ui/react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { authStore } from "store/auth.store";
import { useMutation, useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";


export const useMainProps = () => {

  const navigate = useNavigate();

  const [state, setState] = useState('')

  
  const createUsers = useQuery({queryKey: ['user'], queryFn: () => request.get('users').then(res => res.data)})
  
  const { mutate } = useMutation({mutationFn: (id) => request.patch(`auth/grant-permission/${id}`)})
  const handleGivePermission = (id) => {
    mutate(id, {
      onSuccess: 
        authStore.hasPermission({user_id: id})
    })
  };


  const {mutateAsync} = useMutation({mutationFn: (id) => request.delete(`users/${id}`)})
  const handleDeleteUser = (id) => {
    mutateAsync(id)
  };


  
  
  const handleOpen = () => setOpenModal(true);

  const handleClose = () => {
    setOpenModal(false);
    setEditing(false);
    reset();
  };

  const handleEdit = (e, item) => {
    e.stopPropagation();
    setEditing(true);
    handleOpen();
    reset({ name: item?.login_name });
    setState(item?.id)
  }



  const columns = [
    {
      title: "Login",
      dataIndex: "login_name",
      key: "name",
      width: 100,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: 100,
    },
    {
      title: "Created at",
      dataIndex: "created_at",
      key: "created_at",
      width: 200,
      render: (item) => <span>{item ? format(new Date(item), "dd.MM.yyyy HH:mm") : "" }</span>,
    },
    {
      title: "Has permission",
      dataIndex: "has_permission",
      key: "has_permission",
      render: (item) => item ? "Yes" : "No",
    },
    {
      title: "Operations",
      key: "operations",
      render: (item) => {
        return <div>
          <Button colorScheme={item?.has_permission ? "linkedin" : "green"} onClick={() => handleGivePermission(item?.id)} isDisabled={item?.has_permission}>{item?.has_permission ? "access is allowed" : "give access"}</Button>
          <Button colorScheme="teal" onClick={(e) => handleEdit(e, item)}>Edit</Button>
          <Button colorScheme="red" onClick={() => handleDeleteUser(item?.id)}>Delete</Button>
        </div>;
      },
    },
  ];

  authStore.hasNewData(createUsers?.data?.data?.users)
  const data = authStore.newData

    // ------MODAL-----  
    const [openModal, setOpenModal] = useState(false)
    const [isEditing, setEditing] = useState(false);
  
    const { control, reset, handleSubmit, register } = useForm();
  
    const { fields, append, remove } = useFieldArray({
      name: "options",
      control
    });

    const postUser = useMutation({mutationFn: (data) => request.post('users', data)})

    const onSubmit = (data) => {
      if(isEditing) {
        setOpenModal(false);
      } else {
        console.log("Created");
      }
    };
  

  return {
    columns,
    data,
    openModal,
    handleClose,
    navigate,
    onSubmit,
    handleSubmit,
    register,
  };
};
