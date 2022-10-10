import { AuthPage } from "../components/orgams/AuthPage";

export function NewRoom() {
  return (
    <>
      <AuthPage
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
