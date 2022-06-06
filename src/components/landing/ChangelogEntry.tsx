import React from "react";
import { useMediaQuery } from "react-responsive";
import { withTheme } from "styled-components";
import { Box } from "../shared/Box";
import { Circle } from "../shared/Circle";
import { Typography } from "../shared/Typography";

interface ChangelogEntryProps {
  color: string;
  date: string;
  theme: any;
  children: any;
}

const ChangelogEntry = ({
  color,
  date,
  theme,
  children,
}: ChangelogEntryProps) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <Box
      display="flex"
      style={{
        gap: "50px",
      }}
    >
      <Box width="10px">
        <Circle color={color} />
      </Box>
      <Box
        width={isTabletOrMobile ? "75px" : "150px"}
        style={{
          textAlign: "left",
        }}
      >
        <Typography color={theme.colors.subtext}>{date}</Typography>
      </Box>
      <Box width="250px">{children}</Box>
    </Box>
  );
};

export default withTheme(ChangelogEntry);
