export const MocksHelpers = () => {
  const existingRoomMock = {
    title: "Quer entrar em uma sala já existente?",
    subtitle: "Clique aqui",
  };
  const asideMock = {
    id: 1,
    strong: "Crie salas de Q&amp; A ao-vivo",
    paragraph: "Tire as dúvidas da sua audiência em tempo-real",
  };
  const formMock = {
    name: "email",
    type: "email",
    placeholder: "Digite o código da sala",
  };

  return {
    existingRoomMock,
    asideMock,
    formMock,
  };
};
