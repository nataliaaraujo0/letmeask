import { FormEvent, useState } from "react";
import { AuthPage } from "../components/orgams/AuthPage";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";
//import { useAuth } from "../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";

export function NewRoom() {
  let navigate = useNavigate();
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

    navigate(`/rooms/${firebaseRoom.key}`);
    console.log(window.location);
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
