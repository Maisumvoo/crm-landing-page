import { Button, Card, Divider, Text } from "@nextui-org/react";
import React from "react";
import { QuotesIcon } from "../icons/QuotesIcon";
import { Flex } from "../styles/flex";

export const Testimonials = () => {
  return (
    <>
      <Flex
        id="depoimentos"
        direction={"column"}
        css={{
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          px: "$6",
          py: "$20",
          flexDirection: "column-reverse",
          "@sm": {
            justifyContent: "space-around",
            px: "$32",
            flexDirection: "row-reverse",
          },
          "@md": {
            px: "$64",
          },
        }}
      >
        <Flex direction="column" css={{ gap: "1.5rem" }}>
          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: "$10",
                  gap: "$5",
                }}
              >
                <QuotesIcon />
                <Flex direction={"column"} css={{ gap: "0.5rem" }}>
                  <Text
                    span
                    css={{
                      maxWidth: "400px",
                      color: "$accents8",
                    }}
                  >
                    O CRMUV transformou completamente nossa abordagem de
                    conversão de leads. Antes, era um desafio constante
                    transformar visitantes em pacientes, mas agora, com a
                    automação inteligente de leads, nossa taxa de conversão
                    aumentou significativamente. O sistema é intuitivo e
                    realmente faz a diferença no nosso dia a dia.
                  </Text>
                  <Text
                    span
                    weight={"bold"}
                    css={{
                      maxWidth: "400px",
                      display: "contents",
                      color: "$accents9",
                    }}
                  >
                    Dr. Ricardo Santos{" "}
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: "$10",
                  gap: "$5",
                }}
              >
                <QuotesIcon />
                <Flex direction={"column"} css={{ gap: "0.5rem" }}>
                  <Text
                    span
                    css={{
                      maxWidth: "400px",
                      color: "$accents8",
                    }}
                  >
                    Com o CRMUV, conseguimos fidelizar nossos clientes de uma
                    forma que nunca imaginamos ser possível. As campanhas
                    personalizadas nos permitiram manter um contato constante e
                    relevante com nossos pacientes, resultando em um aumento
                    notável nas vendas de serviços adicionais. Estamos muito
                    satisfeitos com os resultados.
                  </Text>
                  <Text
                    span
                    weight={"bold"}
                    css={{
                      maxWidth: "400px",
                      display: "contents",
                      color: "$accents9",
                    }}
                  >
                    Dra. Maria Oliveira{" "}
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: "$10",
                  gap: "$5",
                }}
              >
                <QuotesIcon />
                <Flex direction={"column"} css={{ gap: "0.5rem" }}>
                  <Text
                    span
                    css={{
                      maxWidth: "400px",
                      color: "$accents8",
                    }}
                  >
                    Antes de utilizar o CRMUV, enfrentávamos muitos problemas
                    com no-shows, o que prejudicava nossa agenda e nossos
                    resultados financeiros. Agora, com os lembretes automáticos
                    e a comunicação integrada, reduzimos drasticamente as faltas
                    nas consultas. Nossos pacientes estão mais informados e nós,
                    mais organizados.
                  </Text>
                  <Text
                    span
                    weight={"bold"}
                    css={{
                      maxWidth: "400px",
                      display: "contents",
                      color: "$accents9",
                    }}
                  >
                    Dr. João Carvalho{" "}
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={"start"}
          direction={"column"}
          css={{
            alignItems: "center",
            "@sm": {
              alignItems: "start",
            },
          }}
        >
          <Text span css={{ color: "$blue600" }}>
            O que Nossos Clientes Dizem
          </Text>
          <Text h3>Depoimentos</Text>
          <Text span css={{ color: "$accents8", maxW: "600px", pb: "$8" }}>
            Descubra como o CRMUV tem transformado clínicas ao redor do país.
            Nossos clientes compartilham suas histórias de sucesso e os
            incríveis resultados alcançados com o uso da nossa plataforma. Leia
            depoimentos reais e veja como o CRMUV pode fazer a diferença na sua
            clínica também.
          </Text>
          <Button>
            <a
              style={{ color: "#fff" }}
              href="https://wa.me/5511991554329?text=Quero%20agendar%20uma%20reuni%C3%A3o%20para%20falar%20sobre%20o%20CRMUV!"
            >
              Agendar uma demonstração
            </a>
          </Button>
        </Flex>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
