import { AuthPage } from "../components/orgams/AuthPage";
import { useAuth } from "../hooks/useAuth";
import { useNavigations } from "../hooks/useRouters/useNavigation";

export function Home() {
  const { navigateToCreateRoom } = useNavigations();

  async function handleCreateRoom() {
    const { signInWithGoogle, user } = useAuth();
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
