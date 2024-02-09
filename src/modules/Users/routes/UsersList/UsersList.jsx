import { Box, Button, FormControl, Input } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useMainProps } from "./useMainProps";
import { CustomTable } from "components/CustomTable";
import { UserModal } from "components/UserModal";


export const UsersList = () => {

  const { 
    columns,
    data,
    openModal,
    handleClose,
    onSubmit,
    handleSubmit,
    register, } = useMainProps();

  return <Box>
    <h1 className={cls.title}>Users</h1>
    <CustomTable 
    className="table" 
    columns={columns} 
    data={data}
    />

    <UserModal openModal={openModal} callback={handleSubmit(onSubmit)} onClose={handleClose}>
      <FormControl as='form'>
        <Input placeholder='user change' type="text" {...register('name')} />
      </FormControl>
    </UserModal>
  </Box>;

};
