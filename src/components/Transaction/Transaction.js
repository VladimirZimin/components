import PropTypes from "prop-types";
import styled from "styled-components";

const Td = styled.td`
  font-weight: 300;
  font-size: 13px;
  padding: 5px 0 5px 0;

  &:nth-child(even) {
    border-left: 1px solid #e9eef3;
    border-right: 1px solid #e9eef3;
  }
`;

export default function Transaction({ type, amount, currency }) {
  return (
    <>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string,
  currency: PropTypes.string.isRequired,
};
