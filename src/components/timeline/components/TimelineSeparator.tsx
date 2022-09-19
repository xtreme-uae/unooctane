import { FC, ReactNode } from "react";
import styled from "styled-components";
import useTheme from "../../../theme/useTheme";
import { alertColor, AlertColorType } from "../../../ui/color/alert";

const TimelineSeparator: FC<Props> = () => {
  const {
    theme: { mode, primaryColor },
  } = useTheme();

  return (
    <StyledConnector theme={{ mode, primaryColor }}>
      <span className="connect-circle" />
      <span className="connect-line" />
    </StyledConnector>
  );
};

const StyledConnector = styled("div")<Props>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 0px;
  min-width: 0px;

  & .connect-line {
    width: 2px;
    flex-grow: 1;
    background: ${({ theme }) =>
      theme.mode.name === "light"
        ? `rgba(58, 53, 65, 0.12)`
        : `rgba(231, 227, 252, 0.12)`};
  }

  & .connect-circle {
    ${({ varient, color, theme }) => `
      background: ${
        varient && varient === "filled" && color
          ? alertColor[color]
          : theme.primaryColor.color
      }`};
    margin: 11px auto;
    height: 12px;
    width: 12px;
    border-color: ${({ varient, color, theme }) =>
      varient === "outlined"
        ? color
          ? alertColor[color]
          : theme.primaryColor.color
        : "transparent"};
    border-radius: 50%;
    border-style: solid;
    border-width: 2px;

    ${({ theme, varient }) =>
      varient !== "outlined" &&
      `box-shadow: ${
        theme.mode.name === "dark" ? "#9f9f9f1f" : "#6e6e6e1f"
      } 0px 0px 0px 3px;`}
  }
`;

interface Props {
  varient?: "filled" | "outlined";
  color?: AlertColorType;
  component?: ReactNode;
}

export default TimelineSeparator;
