import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";

export const Trial = () => {
  return (
    <>
      <Flex
        css={{
          py: "$20",
          px: "$6",
        }}
        justify={"center"}
        direction={"column"}
        align={"center"}
      >
        <Text h3>Pronto para Transformar o Faturamento da Sua Clínica?</Text>
        <Text
          span
          css={{
            color: "$accents8",
            pb: "$15",
            textAlign: "center",
          }}
        >
          Experimente o CRMUV gratuitamente e veja os resultados.
        </Text>

        <Button>
          <a
            style={{ color: "#fff" }}
            href="https://wa.me/5511991554329?text=Quero%20experimentar%20o%20CRMUV!"
          >
            Experimente Gratuitamente
          </a>
        </Button>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
