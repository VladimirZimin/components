import styled from "styled-components";

const ProfileWrapper = styled.div`
  margin: 0 20px;
  width: 300px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 5px;
  border: 1px solid #e9eef3;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.09);
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px;
`;

const Image = styled.img`
  display: block;
  margin-bottom: 40px;
  width: 100px;
  height: auto;
  border: 3px solid #e9eef3;
  border-radius: 50%;
  overflow: hidden;
`;

const UserName = styled.p`
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const UserTag = styled.p`
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  font-size: 14x;
  font-weight: 300;

  color: #adadad;
`;

const UserLocation = styled(UserTag)`
  font-weight: 400;
`;

const StatsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));

  padding: 0;
  margin: 0;
  border-top: 1px solid #e9eef3;
  list-style: none;
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  background-color: #f3f6f9;
  border-right: 1px solid #dddddd;

  &:last-child {
    border-right: none;
  }
`;

const Label = styled.span`
  font-size: 14px;
  font-weight: 300;

  color: #adadad;
`;

const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;

export {
  ProfileWrapper,
  Quantity,
  Label,
  StatsItem,
  StatsList,
  UserLocation,
  UserTag,
  UserName,
  Image,
  Description,
};
