import { Button, Flex, FormControl, Image, Input } from "@chakra-ui/react";
import ilustrationImg from "../assets/illustration.svg";
import logoImg from "../assets/logo.svg";
import { GoogleLogo, ArrowSquareRight } from "phosphor-react";
import { AsideContent, MainContent, SeparetorContent } from "./home.styles";
export function Home() {
  return (
    <Flex height="100vh">
      <AsideContent>
        <img src={ilustrationImg} />
        <strong>Crie salas de Q&amp; A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </AsideContent>

      <MainContent>
        <Flex flexDir="column" w="100%" maxW="320px" textAlign="center">
          <Image src={logoImg} boxSize="200" alignSelf="center" />
          <Button bg="danger.50" _hover={{ background: "danger.60" }}>
            <GoogleLogo size={32} />
            <p> Crie sua sala com o Google</p>
          </Button>
          <SeparetorContent>ou entre em uma sala</SeparetorContent>
          <FormControl>
            <Input
              type="email"
              placeholder="Digite o código da sala"
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
          >
            <ArrowSquareRight size={32} />
            Entrar na sala
          </Button>
        </Flex>
      </MainContent>
    </Flex>
  );
}
