import {
  Box,
  VStack,
  IconButton,
  theme,
  useMediaQuery,
  Flex,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidebar/Sidebar";

import * as styles from "./DeckPageLayout.styles";
import TopbarWidget from "../../widgets/topbar-widget/TopbarWidget";

interface DeckPageLayoutProps {
  sidebarOpened: boolean;
}

const DeckPageLayout: React.FC<DeckPageLayoutProps> = ({
  sidebarOpened = true,
}) => {
  const [largerThanMd] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

  return (
    <Flex position={"relative"} overflowX={"clip"}>
      <styles.SidebarMotionContainer
        transition={{
          type: "tween",
        }}
        initial={{
          x: sidebarOpened ? 280 : 0,
        }}
        animate={{
          x: sidebarOpened ? 280 : 0,
        }}
      >
        <Box position={"sticky"} top={0}>
          <Sidebar />
        </Box>
      </styles.SidebarMotionContainer>

      <styles.MainMotionContainer
        transition={{
          type: "tween",
        }}
        initial={{
          marginLeft: sidebarOpened ? 280 : 0,
        }}
        animate={
          largerThanMd
            ? {
                marginLeft: sidebarOpened ? 280 : 0,
                x: 0,
              }
            : {
                x: sidebarOpened ? 280 : 0,
                marginLeft: 0,
              }
        }
      >
        <Box position={"sticky"} top={0} zIndex={1}>
          <TopbarWidget />
        </Box>
        <Box bg={"gray.50"} padding={"32px 0"}>
          <Box
            margin={"0 auto"}
            padding={"0 8px"}
            maxW={{
              base: "full",
              sm: "md",
              md: "2xl",
              lg: "4xl",
              xl: "5xl",
            }}
          >
            <VStack
              alignItems="stretch"
              divider={
                <Box
                  border={0}
                  margin="16px 0px !important"
                  textAlign={"center"}
                >
                  <IconButton
                    variant={"ghost"}
                    aria-label={""}
                    icon={
                      <FontAwesomeIcon
                        icon={faPlus}
                        color={theme.colors.gray[600]}
                      />
                    }
                    size="sm"
                  />
                </Box>
              }
            >
              <Box minH={"100px"} bgColor={"red.100"} borderRadius="2xl"></Box>
              <Box minH={"400px"} bgColor={"red.100"} borderRadius="2xl"></Box>
              <Box minH={"800px"} bgColor={"red.100"} borderRadius="2xl"></Box>
              <Box minH={"400px"} bgColor={"red.100"} borderRadius="2xl"></Box>
            </VStack>
          </Box>
        </Box>
      </styles.MainMotionContainer>
    </Flex>
  );
};

export default DeckPageLayout;
