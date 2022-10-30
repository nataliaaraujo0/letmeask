import { useNavigate } from "react-router-dom";

export const useNavigations = () => {
  let navigate = useNavigate();

  //navegar devolta pra sala após criação de sala
  function navigateToRom(firebaseRoom: any) {
    navigate(`/rooms/${firebaseRoom.key}`);
  }
  //navegar para a rota de newRooms
  function navigateToCreateRoom() {
    navigate("/rooms/new");
  }

  //navegar para a rota de sala existente
  function navigateToRoomExisting() {
    navigate("/");
  }

  return {
    navigateToCreateRoom,
    navigateToRoomExisting,
    navigateToRom,
  };
};
