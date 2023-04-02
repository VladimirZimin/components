import PropTypes from "prop-types";
import {
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
} from "./Profile.styled";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileWrapper>
      <Description>
        <Image src={avatar} alt="User avatar" className="avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileWrapper>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
