import { Divider, Grid, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { FeatureIcon } from "../icons/FeatureIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Features1 = () => {
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
            justifyContent: "space-around",
            px: "$32",
            flexDirection: "row",
          },
          "@md": {
            px: "$64",
          },
        }}
      >
        <Flex direction="column">
          <Text
            style={{
              fontSize: "26px",
              marginBottom: "30px",
            }}
            span
            css={{ color: "$blue600" }}
          >
            Por que o CRMUV é a Melhor Escolha para sua Clínica?
          </Text>
          <Text h3>Automatização Inteligente de Leads</Text>
          <Text
            span
            css={{
              maxWidth: "400px",
              color: "$accents8",
            }}
          >
            Qualifique e converta leads automaticamente com nossa tecnologia
            avançada.
          </Text>

          <Flex
            css={{
              py: "$10",
              gap: "$5",
            }}
          >
            <BoxIcon />
            <Flex direction={"column"}>
              <Text h4 weight={"medium"}>
                Fidelização Eficaz
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                  color: "$accents8",
                }}
              >
                Aumente as vendas de serviços adicionais com campanhas
                personalizadas.
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
                Melhores Taxas de Comparecimento
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                  color: "$accents8",
                }}
              >
                Reduza no-shows com lembretes automáticos e comunicação
                integrada.
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
                Custo-Efetividade
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                  color: "$accents8",
                }}
              >
                Aumente seu faturamento sem a necessidade de altos investimentos
                em tráfego.
              </Text>
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
