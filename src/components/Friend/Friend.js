import PropTypes from "prop-types";
import styled from "styled-components";

const Status = styled.span`
  margin: 0 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.isOnline ? "#3bff00" : "#ff3b38")};
`;

const Image = styled.img`
  display: block;
  margin: 15px;
  margin-right: 20px;
  margin-left: 0;
  width: 80px;
  height: auto;
  border-radius: 10px;
  border: 3px solid #e9eef3;
  overflow: hidden;
`;

const Name = styled.p`
  font-size: 26px;
  font-weight: 600;
`;

export default function Friend({ avatar, name, isOnline }) {
  return (
    <>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Image src={avatar} alt="User avatar {name}" width="48" />
      <Name>{name}</Name>
    </>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
