import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.section`
  margin: 0 15px;
`;

export default function UserSection({ title, children }) {
  return (
    <Section>
      {title && <h2>{title}</h2>}
      {children}
    </Section>
  );
}

UserSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
