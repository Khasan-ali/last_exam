import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const useTestsProps = () => {

  const [isOpen, setOpen] = useState(false);
  const [isEditing, setEditing] = useState(false);

  const navigate = useNavigate();
  const { control, reset, handleSubmit } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "options",
    control
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setEditing(false);
    reset();
  };

  const handleEditClick = (e, item) => {
    e.stopPropagation();
    setEditing(true);
    handleOpen();
    reset({ options: item?.options, question_content: item?.question_content, question_images: item?.question_images, subject_id: item?.subject_id });
  };

  const onSubmit = (data) => {
    if(isEditing) {
      console.log("Edited");
    } else {
      console.log("Created");
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "question_content",
      key: "question_content",
    },
    {
      title: "Admin",
      dataIndex: "admin",
      key: "admin",
      render: (item) => <span>{item?.login_name}</span>
    },
    {
      title: "Options",
      dataIndex: "options",
      key: "options",
      render: (item) => <span>{item?.map((item) => item?.content)}</span>
    },
    {
      title: "Images",
      dataIndex: "question_images",
      key: "question_images",
      render: (item) => <span>{item?.map((item, index) => <img src={item} alt="" width={50} height={50} key={index} />)}</span>
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      render: (item) => <span>{item?.title}</span>
    },
    {
      title: "",
      dataIndex: "",
      key: "edit",
      render: (item) => {
        return <Box>
          <Button colorScheme="orange" onClick={(e) => handleEditClick(e, item)}>Edit</Button>
          <Button colorScheme="red" onClick={(e) => {}}>Delete</Button>
        </Box>;
      }
    },
  ];

  const data = [
    {
      admin: {
        id: "string",
        login_name: "string"
      },
      created_at: "string",
      id: "string",
      options: [
        {
          content: "string",
          id: "string",
          image_urls: [
            "string"
          ],
          is_answer: true
        }
      ],
      question_content: "string",
      question_images: [
        "string"
      ],
      subject: {
        created_at: "string",
        id: "string",
        title: "string"
      }
    }
  ];

  return {
    data,
    columns,
    isOpen,
    handleOpen,
    handleClose,
    fields,
    append,
    remove,
    navigate,
    onSubmit,
    handleSubmit,
  };
};
