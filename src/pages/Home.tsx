import { AuthPage } from "../components/orgams/AuthPage";
import { useAuth } from "../hooks/useAuth";
import { useNavigations } from "../hooks/useRouters/useNavigation";

export function Home() {
  const { navigateToCreateRoom } = useNavigations();
  const { signInWithGoogle, user } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    navigateToCreateRoom();
  }

  return (
    <>
      <AuthPage onClickAuthentication={handleCreateRoom} existingroom={{}} />
    </>
  );
}
