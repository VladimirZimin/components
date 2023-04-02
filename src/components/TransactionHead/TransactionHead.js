import styled from "styled-components";

const TableHead = styled.thead`
  height: 40px;
  padding: 5px;
  font-weight: 600;
  font-size: 15px;
  background-color: #05bfd7;
  color: white;

  & th:nth-child(even) {
    border-left: 1px solid #e9eef3;
    border-right: 1px solid #e9eef3;
  }
`;

export default function TransactionHead() {
  return (
    <TableHead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TableHead>
  );
}
