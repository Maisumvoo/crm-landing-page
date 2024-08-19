import { Button, Card, Divider, Grid, Text } from "@nextui-org/react";
import React from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Plans = () => {
  return (
    <>
      <Flex
        id="plans"
        css={{ py: "$20", gap: "1rem", px: "$6" }}
        justify={"center"}
        wrap={"wrap"}
        direction={"column"}
        align={"center"}
      >
        <Flex direction={"column"} align={"center"}>
          <Text
            style={{
              fontSize: "26px",
              marginBottom: "30px",
            }}
            span
            css={{ color: "$blue600" }}
          >
            Explore Nossos Planos
          </Text>
          <Text h2>Planos transparentes</Text>
        </Flex>

        <Flex
          css={{ gap: "2rem", width: "100%" }}
          wrap={"wrap"}
          justify={"center"}
        >
          {/* Plano Starter */}
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Plano Básico
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>
                    Ideal para pequenas equipes que estão começando a
                    transformar a gestão do atendimento ao cliente.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$4" }}>
              <Text css={{ display: "contents" }} h2>
                R$ 299
              </Text>
              <Text css={{ display: "contents", color: "$accents8" }}>
                {" "}
                /mês
              </Text>
              <Button css={{ mt: "$7", mb: "$12" }}>
                <a
                  style={{ color: "#fff" }}
                  href="https://wa.me/5511991554329?text=Quero%20contratar%20o%20plano%20b%C3%A1sico!"
                >
                  Contratar
                </a>
              </Button>

              <Divider />
              <Box as={"ul"}>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Até 3 usuários
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Suporte para criação de fluxos.
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>

          {/* Plano Professional */}
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Plano Standard
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>
                    A solução completa para equipes que buscam eficiência
                    operacional e inovação no atendimento.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$4" }}>
              <Text css={{ display: "contents" }} h2>
                R$ 499
              </Text>
              <Text css={{ display: "contents", color: "$accents8" }}>
                {" "}
                /mês
              </Text>
              <Button css={{ mt: "$7", mb: "$12" }}>
                {" "}
                <a
                  style={{ color: "#fff" }}
                  href="https://wa.me/5511991554329?text=Quero%20contratar%20o%20plano%20standard!"
                >
                  Contratar
                </a>
              </Button>

              <Divider />
              <Box as={"ul"}>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Até 5 usuários
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Suporte para criação de fluxos
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Acesso ilimitado ao typebot
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>

          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Plano Profissional
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>
                    Expanda as fronteiras de seu negócio com recursos ilimitados
                    e personalização avançada.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$4" }}>
              <Text css={{ display: "contents" }} h2>
                R$ 649
              </Text>
              <Text css={{ display: "contents", color: "$accents8" }}>
                {" "}
                /mês
              </Text>
              <Button css={{ mt: "$7", mb: "$12" }}>
                {" "}
                <a
                  style={{ color: "#fff" }}
                  href="https://wa.me/5511991554329?text=Quero%20contratar%20o%20plano%20profissional!"
                >
                  Contratar
                </a>
              </Button>

              <Divider />
              <Box as={"ul"}>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Até 10 usuários
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Suporte para criação de fluxos
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Acesso ilimitado ao typebot
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Acesso ilimitado ao n8n
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Suporte 24h
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>

          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Plano Empresarial
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>
                    Customize seu negócio.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$4" }}>
              <Text css={{ display: "contents" }} h2>
                Orçamento Personalizado
              </Text>
              <Button css={{ mt: "$7", mb: "$12" }}>
                {" "}
                <a
                  style={{ color: "#fff" }}
                  href="https://wa.me/5511991554329?text=Quero%20um%20or%C3%A7amento%20para%20o%20plano%20empresarial!"
                >
                  Consultar
                </a>
              </Button>

              <Divider />
              <Box as={"ul"}>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Usuários Ilimitados
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Suporte para criação de fluxos
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Acesso ilimitado ao typebot
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Acesso ilimitado ao n8n
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Suporte 24h
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
        </Flex>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
