import styled from "styled-components";
import Statistics from "../Statistics/Statistics";
import {
  ProfileWrapper,
  StatsItem,
  StatsList,
} from "../Profile/Profile.styled";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const StatisticsWrap = styled(ProfileWrapper)`
  display: flex;
  flex-direction: column;
`;
const StatisticList = styled(StatsList)``;
const StatisticsItem = styled(StatsItem)`
  background-color: ${({ background }) => background};
  border-right: none;
  padding: 7px 10px;
`;
const StatisticTitle = styled.h3`
  margin: 25px auto;

  text-transform: uppercase;
`;

export default function MainStatisticList({ title, stats }) {
  return (
    <StatisticsWrap>
      <StatisticTitle>{title}</StatisticTitle>
      <StatisticList>
        {stats.map((stat) => {
          return (
            <StatisticsItem key={stat.id} background={getRandomHexColor()}>
              <Statistics label={stat.label} percentage={stat.percentage} />
            </StatisticsItem>
          );
        })}
      </StatisticList>
    </StatisticsWrap>
  );
}
