import PropTypes from "prop-types";
import Transaction from "../Transaction/Transaction";
import styled from "styled-components";

const TableRow = styled.tr`
  height: 40px;
  &:nth-child(even) {
    background-color: #ecf1f3;
  }
`;

export default function TransactionBody({ transactions }) {
  return (
    <tbody>
      {transactions.map((transaction) => {
        return (
          <TableRow key={transaction.id}>
            <Transaction
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          </TableRow>
        );
      })}
    </tbody>
  );
}

TransactionBody.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
