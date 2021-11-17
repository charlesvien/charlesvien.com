import styled from "styled-components";
import PropTypes from "prop-types";

interface CircleProps {
  color: string;
}

/**
 * Circle Component
 * @augments {Component<Props, State>}
 */

export const Circle = styled.span<CircleProps>`
  height: 10px;
  width: 10px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
`;

Circle.propTypes = {
  color: PropTypes.string.isRequired,
};
