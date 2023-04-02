import PropTypes from "prop-types";
import TransactionBody from "../TransactionBody/TransactionBody";
import TransactionHead from "../TransactionHead/TransactionHead";
import styled from "styled-components";

const Table = styled.table`
  margin: 20px;
  width: 500px;
  text-align: center;
  border-collapse: collapse;
  border: 1px solid #e9eef3;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.09);
  color: black;
`;

export default function TransactionHistory({ transactions }) {
  return (
    <Table>
      <TransactionHead />
      <TransactionBody transactions={transactions} />
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
