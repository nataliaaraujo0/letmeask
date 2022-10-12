import { useNavigate } from "react-router-dom";

export const useNavigations = () => {
  let navigate = useNavigate();

  //navegar para a rota de newRooms
  function handleCreateRoom() {
    navigate("/rooms/new");
  }

  //navegar para a rota de sala existente
  function navigateToRoomExisting() {
    navigate("/");
  }

  return {
    handleCreateRoom,
    navigateToRoomExisting,
  };
};
