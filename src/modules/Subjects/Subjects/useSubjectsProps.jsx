import { Button } from "@chakra-ui/react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export const useSubjectsProps = () => {

  const navigate = useNavigate();

  const handleDeleteSubject = (id) => {
    console.log({ id });
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Created at",
      dataIndex: "created_at",
      key: "created_at",
      render: (item) => <span>{item ? format(new Date(item), "dd.MM.yyyy HH:mm") : "" }</span>,
    },
    {
      title: "Operations",
      key: "operations",
      render: (item) => {
        return <div>
          <Button colorScheme="teal" onClick={() => navigate(`/subjects/${item?.id}`)}>Edit</Button>
          <Button colorScheme="red" onClick={() => handleDeleteSubject(item?.id)}>Delete</Button>
        </div>;
      },
    }
  ];

  const data = [
    {
      created_at: new Date().toISOString(),
      id: 1,
      title: "Title 1"
    },
    {
      created_at: new Date().toISOString(),
      id: 2,
      title: "Title 2"
    },
  ];

  return {
    columns,
    data
  };
};
