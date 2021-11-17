import styled from "styled-components";
import {
  color,
  ColorProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
import { propType } from "@styled-system/prop-types";

type LinkProps = TypographyProps & SpaceProps & ColorProps & ShadowProps;

/**
 * Link Component
 * @augments {Component<Props, State>}
 */

export const Link = styled.a<LinkProps>`
  ${typography}
  ${space}
  ${color}
  ${shadow}
`;

Link.propTypes = {
  ...propType.typography,
  ...propType.space,
  ...propType.color,
  ...propType.shadow,
};
