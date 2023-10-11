import { FC } from "react";
import styled from "styled-components";

const Footer: FC = () => {
  return <SFooter>footer</SFooter>;
};

const SFooter = styled.footer`
  background: var(--color-primary);
  padding: 1.25rem 2rem;
  color: var(--color-white);
  text-align: center;
`;

export default Footer;
