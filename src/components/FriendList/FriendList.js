import PropTypes from "prop-types";
import Friend from "../Friend/Friend";
import { ProfileWrapper } from "../Profile/Profile.styled";
import styled from "styled-components";

const FriendListWrapper = styled(ProfileWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  list-style: none;
`;

const FriendItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #e9eef3;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.09);
`;

export default function FriendList({ friends }) {
  return (
    <FriendListWrapper>
      {friends.map((friend) => {
        return (
          <FriendItem key={friend.id}>
            <Friend
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </FriendItem>
        );
      })}
    </FriendListWrapper>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};
