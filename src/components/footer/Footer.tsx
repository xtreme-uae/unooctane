import { Icon } from "@iconify/react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";
import { Text } from "../../ui";


const Footer = () => {
  const {
    theme: {
      layout: { footerPosition },
    },
  } = useTheme();
  if (footerPosition === "hidden") return <></>;

  return (
    <StyledFooter
      className={`footer_position--${footerPosition} ${
        footerPosition === "fixed" ? "fg-theme" : ""
      }`}
    >
      <Text varient="body1" weight="medium">
        Made with ❤️ by{" "}
        <a
          href="#"
          target={"_blank"}
          className="text-primary"
        >
          HMH Labz
        </a>
      </Text>
      
    </StyledFooter>
  );
};
export default Footer;
const StyledFooter = styled("footer")`
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 1rem 1.2rem;
  z-index: 999;

  &.footer_position--fixed {
    position: sticky;
    bottom: 0;
    border-radius: 0.6rem;
    margin: 0 auto;
    width: calc(100% - 2.4rem);
  }
`;
