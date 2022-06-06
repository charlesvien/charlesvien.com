import styled from "styled-components";
import {
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  grid,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  GridProps,
} from "styled-system";
import propTypes from "@styled-system/prop-types";

type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  GridProps;

/**
 * Box Component
 * @augments {Component<Props, State>}
 */

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  min-width: 0;
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
  ${grid}
`;

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.flexbox,
  ...propTypes.border,
  ...propTypes.position,
  ...propTypes.grid,
};
