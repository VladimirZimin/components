import styled from "styled-components";

const Label = styled.span`
  margin-bottom: 5px;
  font-size: 12px;
  color: #ffffff;
`;

const Percentage = styled(Label)`
  margin-bottom: 0;
  font-size: 18px;
`;

export default function Statistics({ label, percentage }) {
  return (
    <>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </>
  );
}
