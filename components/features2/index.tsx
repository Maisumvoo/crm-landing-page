import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { FeatureIcon } from "../icons/FeatureIcon";
import { Flex } from "../styles/flex";

export const Features2 = () => {
  return (
    <>
      <Flex
        direction={"column"}
        css={{
          gap: "1rem",
          pt: "$20",
          justifyContent: "center",
          alignItems: "center",
          px: "$6",

          "@sm": {
            gap: "5rem",
            flexDirection: "row-reverse",
            px: "$16",
          },
          "@md": {
            justifyContent: "space-evenly",
          },
        }}
      >
        <Flex direction="column" align={"center"}>
          <Text
            style={{
              fontSize: "26px",
              marginBottom: "30px",
            }}
            span
            css={{ color: "$blue600" }}
          >
            Sua Clínica passa por Isso? Descubra se o CRMUV é para você
          </Text>
          <Text h3>CRMUV</Text>
          <Text
            span
            css={{
              maxWidth: "400px",
              color: "$accents8",
            }}
          >
            Enfrentando desafios para transformar visitantes em clientes? Com o
            CRMUV, automatize o processo de qualificação de leads e aumente sua
            taxa de conversão.
          </Text>

          <Flex
            justify={"center"}
            wrap={"wrap"}
            css={{
              py: "$10",
            }}
          >
            <Flex
              css={{
                py: "$10",
                gap: "$5",
              }}
            >
              <BoxIcon />
              <Flex direction={"column"}>
                <Text h4 weight={"medium"}>
                  Baixa Fidelização de Clientes
                </Text>
                <Text
                  span
                  css={{
                    maxWidth: "325px",
                    color: "$accents8",
                  }}
                >
                  Está perdendo clientes para a concorrência? Fidelize seus
                  clientes com campanhas personalizadas e comunicação contínua
                  através do CRMUV. Mantenha seus clientes satisfeitos e
                  engajados, promovendo a venda de serviços adicionais e
                  construindo relações duradouras.
                </Text>
              </Flex>
            </Flex>
            <Flex
              css={{
                py: "$10",
                gap: "$5",
              }}
            >
              <BoxIcon />
              <Flex direction={"column"}>
                <Text h4 weight={"medium"}>
                  Muito No Show em Avaliações e Consultas
                </Text>
                <Text
                  span
                  css={{
                    maxWidth: "325px",
                    color: "$accents8",
                  }}
                >
                  Está cansado de ver seus horários vazios devido a faltas?
                  Reduza significativamente os no-shows com lembretes
                  automáticos e comunicação integrada do CRMUV. Garanta que seus
                  clientes estejam sempre informados e motivados a comparecer às
                  suas consultas e avaliações.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex align={"center"}>
          <FeatureIcon />
        </Flex>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
