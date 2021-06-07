import { ReactElement } from "react";
import styled from "@emotion/styled";

interface IProfileProps {
  url: string;
  name: string;
}

export function Profile({ url, name }: IProfileProps): ReactElement {
  return (
    <ProfileStyle>
      <span>
        <img src={url} alt={`${name}의 프로필 사진`} />
      </span>
      <em>{name}</em>
    </ProfileStyle>
  );
}

Profile.defaultProps = {
  isOn: false,
};

const ProfileStyle = styled.span`
  width: 40px;
  margin-right: 20px;
  > span {
    overflow: hidden;
    display: block;
    width: 100%;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #cacaca;
    background-color: #fff;
    > img {
      display: block;
      width: 100%;
    }
  }
  > em {
    display: block;
    margin-top: 5px;
    text-align: center;
    font-size: 12px;
  }
`;
