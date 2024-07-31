import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Faq = () => {
  return (
    <>
      <Flex
        css={{
          py: "$20",
          gap: "$18",
          px: "$6",
        }}
        direction={"column"}
      >
        <Flex align={"center"} direction={"column"}>
          <Text
            style={{
              fontSize: "26px",
              marginBottom: "30px",
            }}
            span
            css={{ color: "$blue600" }}
          >
            FAQ
          </Text>
          <Text h2>Você tem alguma dúvida?</Text>
          <Text
            span
            css={{
              maxWidth: "700px",
              color: "$accents8",
              textAlign: "center",
            }}
          >
            Aqui está nosso FAQ
          </Text>
        </Flex>

        <Flex
          css={{
            gap: "$10",
            "@lg": {
              px: "$64",
            },
          }}
          direction={"column"}
        >
          <Flex css={{ gap: "$5" }} justify={"center"}>
            <BoxIcon />
            <Flex direction={"column"} css={{ gap: "$3" }}>
              <Text h3>
                Como o CRMUV pode ajudar a aumentar a conversão de novos leads
                na minha clínica?
              </Text>
              <Text
                span
                css={{
                  color: "$accents8",
                }}
              >
                O CRMUV utiliza tecnologia avançada para automatizar a
                qualificação de leads. Isso significa que ele identifica e
                prioriza os leads mais promissores, nutrindo-os com comunicações
                personalizadas e relevantes. Dessa forma, os visitantes têm
                maior probabilidade de se tornarem pacientes, aumentando sua
                taxa de conversão.
              </Text>
            </Flex>
          </Flex>

          <Flex css={{ gap: "$5" }} justify={"center"}>
            <BoxIcon />
            <Flex direction={"column"} css={{ gap: "$3" }}>
              <Text h3>
                O CRMUV oferece suporte para campanhas de fidelização de
                clientes?
              </Text>
              <Text
                span
                css={{
                  color: "$accents8",
                }}
              >
                Sim! O CRMUV possui ferramentas poderosas para criar e gerenciar
                campanhas de fidelização. Você pode enviar campanhas
                personalizadas e segmentadas para seus pacientes, mantendo-os
                engajados e incentivando a utilização de serviços adicionais.
                Isso ajuda a fortalecer a relação com seus clientes e aumentar a
                receita da clínica.
              </Text>
            </Flex>
          </Flex>

          <Flex css={{ gap: "$5" }} justify={"center"}>
            <BoxIcon />
            <Flex direction={"column"} css={{ gap: "$3" }}>
              <Text h3>
                Como o CRMUV pode ajudar a reduzir o número de no-shows em
                consultas e avaliações?
              </Text>
              <Text
                span
                css={{
                  color: "$accents8",
                }}
              >
                O CRMUV inclui funcionalidades de lembretes automáticos e
                comunicação integrada, que mantêm os pacientes informados e
                lembrados de suas consultas. Esses lembretes são enviados via
                e-mail, SMS ou notificações push, reduzindo significativamente o
                número de faltas e ajudando a otimizar sua agenda.
              </Text>
            </Flex>
          </Flex>

          <Flex css={{ gap: "$5" }} justify={"center"}>
            <BoxIcon />
            <Flex direction={"column"} css={{ gap: "$3" }}>
              <Text h3>
                O CRMUV é fácil de implementar e usar na minha clínica?
              </Text>
              <Text
                span
                css={{
                  color: "$accents8",
                }}
              >
                Absolutamente! O CRMUV foi projetado para ser intuitivo e fácil
                de usar. Nossa equipe de suporte está disponível para ajudá-lo
                em cada etapa da implementação, garantindo uma transição suave e
                rápida. Além disso, oferecemos treinamentos e materiais de apoio
                para que sua equipe aproveite ao máximo todas as funcionalidades
                do sistema.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
