import { AuthPage } from "../components/orgams/AuthPage";
import { useNavigations } from "../hooks/useRouters/useNavigation";

export function Home() {
  const { navigateToNewRoom } = useNavigations();

  return (
    <>
      <AuthPage onClickAuthentication={navigateToNewRoom} existingroom={{}} />
    </>
  );
}
