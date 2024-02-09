import { useNavigate, useParams } from "react-router-dom";

export const useSubjectsProps = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return {
    id,
    navigate
  };
};
