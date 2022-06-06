import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { Box } from "../components/shared/Box";

const BlankLayout = ({ theme, children }) => (
  <Box
    display="flex"
    height="100%"
    width="100%"
    backgroundColor={theme.colors.background}
  >
    {children}
  </Box>
);

BlankLayout.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default withTheme(BlankLayout);
