import { Divider, Text } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import Image from "next/image";
import Logo from "../../public/logo2.png";

export const Footer = () => {
  return (
    <Flex
      id="contact"
      css={{
        py: "$20",
        px: "$6",
      }}
    >
      <Box as={"footer"} css={{ width: "100%" }}>
        <Flex
          justify={"center"}
          wrap={"wrap"}
          align={"center"}
          css={{
            gap: "$10",
            "&  ul": {
              margin: 0,
            },
            "@sm": {},
          }}
        >
          <Flex
            css={{ gap: "$5", w: "250px" }}
            direction={"column"}
            align={"center"}
          >
            <Image src={Logo} alt="" width={140} height={40} />
          </Flex>

          <Flex
            css={{ gap: "$5", w: "250px" }}
            direction={"column"}
            align={"center"}
          >
            <Text h5>Contato</Text>
            <Box as={"ul"} css={{ gap: "$5", listStyle: "none" }}>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  <a
                    style={{ color: "#687076" }}
                    target="_blank"
                    href="https://www.instagram.com/maisumvoo/"
                  >
                    Instagram
                  </a>
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  <a
                    style={{ color: "#687076" }}
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=61552541667107&is_tour_completed=true"
                  >
                    Facebook
                  </a>
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  <a
                    style={{ color: "#687076" }}
                    target="_blank"
                    href="https://www.tiktok.com/@maisumvoo"
                  >
                    Tiktok
                  </a>
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  <a
                    style={{ color: "#687076" }}
                    href="https://wa.me/5511991554329?text=Quero%20saber%20mais%20sobre%20o%20CRMUV!"
                  >
                    WhatsApp
                  </a>
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  maisumvoo@gmail.com
                </Text>
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Box
          css={{
            px: "$10",
            "@md": {
              px: "$56",
            },
          }}
        >
          <Divider
            css={{
              mt: "$14",
              display: "flex",
              justifyContent: "center",
            }}
          />
          <Flex
            //   justify={'between'}
            align={"center"}
            wrap={"wrap"}
            css={{
              pt: "$8",
              gap: "$10",
              justifyContent: "center",
              "@md": {
                justifyContent: "space-between",
              },
            }}
          >
            <Flex
              css={{
                gap: "$10",
              }}
              wrap={"wrap"}
            >
              {/* <AcmeLogo />
              <AcmeLogo />
              <AcmeLogo />
              <AcmeLogo /> */}
            </Flex>

            <Flex
              css={{
                gap: "$6",
              }}
            >
              <Text span css={{ color: "$accents8" }}>
                © Copyright 2024 MUV Inc.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
