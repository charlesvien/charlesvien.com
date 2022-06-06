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

type TypoProps = TypographyProps & SpaceProps & ColorProps & ShadowProps;

/**
 * Typography Component
 * @augments {Component<Props, State>}
 */

export const Typography = styled.span<TypoProps>`
  ${typography}
  ${space}
  ${color}
  ${shadow}
`;

Typography.propTypes = {
  ...propType.typography,
  ...propType.space,
  ...propType.color,
  ...propType.shadow,
};
