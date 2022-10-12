import { AuthPage } from "../components/orgams/AuthPage";
import { useAuth } from "../hooks/useAuth";
import { useNavigations } from "../hooks/useRouters/useNavigation";

export function Home() {
  const { handleCreateRoom } = useNavigations();

  async function handleCreateRoomm() {
    const { signInWithGoogle, user } = useAuth();
    if (!user) {
      await signInWithGoogle();
    }
    handleCreateRoom();
  }

  return (
    <>
      <AuthPage onClickAuthentication={handleCreateRoomm} existingroom={{}} />
    </>
  );
}
