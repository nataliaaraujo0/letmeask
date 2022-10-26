import ilustrationImg from "../../../assets/illustration.svg";
import logoImg from "../../../assets/logo.svg";

import { AuthPageProps } from "./authpage.interfaces";
import {
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { ArrowSquareRight, GoogleLogo } from "phosphor-react";
import { AsideContent, MainContent, SeparetorContent } from "./authpage.styles";
import { MocksHelpers } from "./mocks";
import { useNavigations } from "../../../hooks/useRouters/useNavigation";

const { formMock, existingRoomMock, asideMock } = MocksHelpers();

export function AuthPage({
  value,
  onChange,
  onSubmitForm,
  onClickAuthentication = () => {},
  onClickSubmit,
  aside = asideMock,

  buttonGoogleAuthentication = (
    <>
      <Button
        bg="danger.50"
        _hover={{ background: "danger.60" }}
        gap="2"
        onClick={onClickAuthentication}
      >
        <GoogleLogo size={32} weight="bold" />
        <p> Crie sua sala com o Google</p>
      </Button>
      ;
    </>
  ),
  separetor = (
    <>
      <SeparetorContent>ou entre em uma sala</SeparetorContent>
    </>
  ),
  form = formMock,

  nameButtonSubmit = "Entrar na sala",
  existingroom = existingRoomMock,
}: AuthPageProps) {
  const { navigateToRoomExisting } = useNavigations();
  return (
    <Flex height="100vh">
      <AsideContent key={aside.id}>
        <img src={ilustrationImg} />
        <strong>{aside.strong}</strong>
        <p>{aside.paragraph}</p>
      </AsideContent>

      <MainContent>
        <Flex flexDir="column" w="100%" maxW="320px" textAlign="center">
          <Image src={logoImg} boxSize="200" alignSelf="center" />
          {buttonGoogleAuthentication}
          {separetor}

          <FormControl onClick={onSubmitForm}>
            <Input
              onChange={onChange}
              value={value}
              name={form.name}
              type={form.type}
              placeholder={form.placeholder}
              _placeholder={{ color: "purple.600" }}
              h="50px"
              borderRadius="4px"
              p="0 16px"
              border="1px solid"
              borderColor={{ color: "purple.900" }}
              bg="white"
              color="purple.600"
            />
          </FormControl>
          <Button
            type="submit"
            bg="purple.600"
            marginTop="16px"
            _hover={{ background: "purple.700" }}
            onClick={onClickSubmit}
          >
            <ArrowSquareRight size={32} />
            {nameButtonSubmit}
          </Button>
          <Text color={"purple.90"} marginTop="8px" fontSize="14px">
            {existingroom.title}
          </Text>
          <Text
            color={"#E559F9"}
            cursor="pointer"
            onClick={navigateToRoomExisting}
            fontSize="15px"
            fontWeight="bold"
          >
            {existingroom.subtitle}
          </Text>
        </Flex>
      </MainContent>
    </Flex>
  );
}
