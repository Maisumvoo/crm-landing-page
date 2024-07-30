"use client";
import { Button, Divider, Input, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { useTheme } from "next-themes";

export const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = async () => {
    if (!email || email === "") return;
    try {
      setLoading(true);
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "!!CAPTURA DE CLIENTE VIA LANDING PAGE!!",
          message: `Cliente com e-mail ${email} solicitou uma demonstração!!`,
        }),
      });
      setEmail("");
      setSuccess(true);
    } catch (error) {
      console.error("handleSubmit: ", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Flex
        css={{
          gap: "$3",
          px: "$6",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          "@sm": {
            flexDirection: "row",
            mt: "$20",
          },
        }}
        justify={"center"}
      >
        <Box
          css={{
            pt: "$13",

            display: "flex",
            flexDirection: "column",
            gap: "$5",
          }}
        >
          <Box
            css={{
              maxWidth: "600px",
            }}
          >
            <Text
              h1
              css={{
                display: "inline",
              }}
            >
              Transforme o Faturamento da sua Clínica{" "}
            </Text>
            <Text
              h1
              color="primary"
              css={{
                display: "inline",
              }}
            >
              com{" "}
            </Text>
            <Text
              h1
              css={{
                display: "inline",
              }}
              color="primary"
            >
              o CRMUV
            </Text>
          </Box>

          <Text
            css={{
              color: "$accents8",
              maxWidth: "400px",
            }}
            size={"$lg"}
            span
          >
            Superando desafios de qualificação de leads, fidelização de clientes
            atuais e comparecimento de agendamentos sem altos investimentos em
            tráfego.
          </Text>

          <Flex
            css={{
              gap: "$8",
              pt: "$4",
            }}
            wrap={"wrap"}
          >
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Insira seu e-mail"
              size="lg"
            />
            <Button onClick={handleSubmit}>
              Agendar demonstração{" "}
              {loading && (
                <>
                  <svg
                    aria-hidden="true"
                    style={{
                      width: "1rem",
                      marginLeft: ".5rem",
                      height: "1rem",
                      color: "#0072f5",
                      animation: "spin 1s linear infinite",
                      fill: "#fff",
                    }}
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </>
              )}{" "}
              {success && !loading && (
                <svg
                  style={{
                    height: 20,
                    width: 20,
                    color: "#fff",
                    marginLeft: ".5rem",
                  }}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
            </Button>
          </Flex>
          <Flex>
            {success && !loading && (
              <Box>
                <Text
                  css={{
                    color: "$accents7",
                  }}
                >
                  Pronto. Em breve iremos entrar em contato para agendar sua
                  demonstração!
                </Text>
              </Box>
            )}
          </Flex>
          <Flex
            wrap={"wrap"}
            css={{
              gap: "$8",
              py: "$7",
              "@sm": {
                py: "$4",
              },
            }}
          >
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> Não é preciso cartão de crédito.
            </Flex>
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> 7 dias de uso gratuito.
            </Flex>
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> Cancele a qualquer momento.
            </Flex>
          </Flex>
        </Box>
        <Box
          css={{
            "& img": {
              width: "775px",
              objectFit: "contain",
            },
          }}
        >
          {theme === "light" ? (
            <img style={{ borderRadius: "10px" }} src="mock2.png" />
          ) : (
            <img style={{ borderRadius: "10px" }} src="mock1.png" />
          )}
        </Box>
      </Flex>

      <Box></Box>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$10" }}
      />
    </>
  );
};
