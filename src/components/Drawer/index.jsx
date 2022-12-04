import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { UseOpenModal } from "../../providers/ProviderOpenModal";
import { StyledMenu } from "./styles";

const drawerBleeding = 0;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;

  const { openModal, setOpenModal } = UseOpenModal();

  const toggleDrawer = (newOpen) => () => {
    setOpenModal(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `100%`,
            width: `40%`,
            overflow: "visible",
          },
        }}
      />
      <Box sx={{ textAlign: "center" }}>
        {/* <Button onClick={toggleDrawer(true)}>Open</Button> */}
      </Box>

      <SwipeableDrawer
        container={container}
        anchor="right"
        open={openModal}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledMenu>
          <ul>
            <li>
              <a onClick={() => setOpenModal(false)} href="#about">
                Sobre
              </a>
            </li>
            <li>
              <a onClick={() => setOpenModal(false)} href="#technologies">
                Tecnologias
              </a>
            </li>
            <li>
              <a onClick={() => setOpenModal(false)} href="#projects">
                Projetos
              </a>
            </li>
          </ul>
        </StyledMenu>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
