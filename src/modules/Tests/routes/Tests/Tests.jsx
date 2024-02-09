import { CustomTable } from "components/CustomTable";
import { useTestsProps } from "./useTestsProps";
import { Box, Button, Checkbox, FormControl, Heading, Input, Select } from "@chakra-ui/react";
import { CustomModal } from "components/CustomModal";

export const Tests = () => {

  const {
    columns,
    data,
    isOpen,
    handleOpen,
    handleClose,
    remove,
    append,
    fields,
    navigate,
    onSubmit,
    handleSubmit,
  } = useTestsProps();

  return <Box>
    <Heading>Tests</Heading>
    <Button colorScheme="red" onClick={handleOpen}>Create new test</Button>
    <CustomTable
      columns={columns}
      data={data}
      onRow={(item) => ({ onClick: () => navigate(item.id) })}
    />
    <CustomModal title="Create new test" isOpen={isOpen} callback={handleSubmit(onSubmit)} onClose={handleClose}>
      <FormControl as="form">
        <Input placeholder="Title" />
        <Input type="file" placeholder="Image" />
        <Heading fontSize="14px">Subject</Heading>
        <Select placeholder='Select option'>
          <option value='option1'>Subject 1</option>
          <option value='option2'>Subject 2</option>
          <option value='option3'>Subject 3</option>
        </Select>
        <Heading fontSize="14px">Variants</Heading>
        {
          fields.map((item, index) => {
            return <Box key={item.id}>
              <Input placeholder="Content" />
              <Checkbox>Is current answer</Checkbox>
              <Button colorScheme="red" fontSize="10" onClick={() => remove(index)}>Delete</Button>
            </Box>;
          })
        }
        <Button colorScheme="telegram"
          onClick={() => append({
            content: "",
            image_urls: [
              ""
            ],
            is_answer: false
          })}>Add variant</Button>
      </FormControl>
    </CustomModal>
  </Box>;
};
