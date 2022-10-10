import ilustrationImg from "../../../assets/illustration.svg";
import logoImg from "../../../assets/logo.svg";

import { AuthPageProps } from "./authpage.interfaces";
import { Button, Flex, FormControl, Image, Input } from "@chakra-ui/react";
import { ArrowSquareRight, GoogleLogo } from "phosphor-react";
import { AsideProps, FormProps } from "./authpage.interfaces";
import { AsideContent, MainContent, SeparetorContent } from "./authpage.styles";

export function AuthPage({
  onClickAuthentication = () => {},
  onClickSubmit = () => {},
  asides = [
    {
      id: 1,
      strong: "Crie salas de Q&amp; A ao-vivo",
      paragraph: "Tire as dúvidas da sua audiência em tempo-real",
    },
  ],
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
  forms = [
    { name: "email", type: "email", placeholder: "Digite o código da sala" },
  ],
  nameButtonSubmit = "Entrar na sala",
}: AuthPageProps) {
  return (
    <Flex height="100vh">
      {asides?.map((aside: AsideProps) => {
        return (
          <AsideContent key={aside.id}>
            <img src={ilustrationImg} />
            <strong>{aside.strong}</strong>
            <p>{aside.paragraph}</p>
          </AsideContent>
        );
      })}

      <MainContent>
        <Flex flexDir="column" w="100%" maxW="320px" textAlign="center">
          <Image src={logoImg} boxSize="200" alignSelf="center" />
          {buttonGoogleAuthentication}
          {separetor}

          <FormControl>
            {forms?.map((form: FormProps) => {
              return (
                <Input
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
              );
            })}
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
        </Flex>
      </MainContent>
    </Flex>
  );
}
