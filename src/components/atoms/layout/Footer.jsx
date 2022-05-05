import styled from "styled-components";

const SFooter = styled.footer`
  color: #fff;
  line-height: 50px;
  text-align: center;
  background: #11999e;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
`;

const Footer = () => {
  return <SFooter>&copy; 2022 text Inc.</SFooter>;
};

export default Footer;
