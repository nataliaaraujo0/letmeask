import { FormEvent, useState } from "react";
import { AuthPage } from "../components/orgams/AuthPage";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

import { useNavigations } from "../hooks/useRouters/useNavigation";

export function NewRoom() {
  const { navigateToRom } = useNavigations();
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    //escrevendo no banco
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    navigateToRom(firebaseRoom);
  }

  return (
    <>
      <AuthPage
        onChange={(event) => setNewRoom(event.target.value)}
        value={newRoom}
        // onSubmitForm={handleCreateRoom}
        onClickSubmit={handleCreateRoom}
        buttonGoogleAuthentication={
          <strong
            style={{ color: "#000", fontSize: "1.3rem", marginBottom: "12px" }}
          >
            Crie uma nova sala
          </strong>
        }
        separetor={<></>}
        nameButtonSubmit="Criar sala"
      />
    </>
  );
}
