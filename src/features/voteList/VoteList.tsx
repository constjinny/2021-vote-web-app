import { Fragment, ReactElement, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";

import { VoteDetail } from "./VoteDetail";
import { VoteResult } from "./VoteResult";
import { voteListSelector, voteListAction } from "./VoteListSlice";
import { IVoteItemProps } from "./type";
import { Tag } from "../../components/tag";
import { Profile } from "../../components/profile";
import { Button } from "../../components/button";

export function VoteList(): ReactElement {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [openId, setOpenId] = useState("");
  const votes = useSelector(voteListSelector.selectVoteList);

  const handleOpenId = (id: string) => setOpenId(id);

  return (
    <VoteListStyle>
      {votes.map((vote: IVoteItemProps) => {
        const {
          author,
          isEdit,
          isOpen,
          isClose,
          openDate,
          closeDate,
          voteId,
          voteName,
        } = vote;
        const isDetailOpen = openId === voteId;
        const isOn = isOpen && !isClose;
        const voteTag = isClose ? "투표 종료" : isOpen ? "투표 중" : "오픈 전";

        const handleModifyVote = () => push(`/modify/${voteId}`);
        const handleDeleteVote = () =>
          dispatch(voteListAction.deleteVote(voteId));

        return (
          <ItemWrapStyle key={voteId} onClick={() => handleOpenId(voteId)}>
            <ItemInfoGroupStyle>
              <Profile url={author.profileUrl} name={author.nickName} />

              <ItemInfoStyle>
                <div>
                  <Tag isOn={isOn} text={voteTag} />
                  <strong>
                    {voteName}
                    <span>{`${openDate} ~ ${closeDate}`}</span>
                  </strong>
                </div>

                {isEdit && (
                  <ButtonGroupStyle>
                    <Button onClick={handleModifyVote}>투표 수정</Button>
                    <Button onClick={handleDeleteVote}>투표 삭제</Button>
                  </ButtonGroupStyle>
                )}
              </ItemInfoStyle>
            </ItemInfoGroupStyle>

            {isDetailOpen && (
              <Fragment>
                {isClose ? (
                  <VoteResult data={vote} />
                ) : (
                  <VoteDetail data={vote} />
                )}
              </Fragment>
            )}
          </ItemWrapStyle>
        );
      })}
    </VoteListStyle>
  );
}

const VoteListStyle = styled.div`
  > div {
    margin-top: 20px;
  }
`;

const ItemWrapStyle = styled.div`
  display: block;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #cacaca;
  background: #fff;
  box-sizing: border-box;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.9) 0px 10px 24px;
  }
  & + & {
    margin-top: 20px;
  }
`;

const ItemInfoGroupStyle = styled.div`
  display: flex;
`;

const ItemInfoStyle = styled.div`
  flex: 1;
  position: relative;
  padding-right: 110px;
  &:after {
    display: block;
    clear: both;
    content: "";
  }
  > div {
    overflow: hidden;
    position: relative;
    padding-left: 60px;
    > span {
      position: absolute;
      top: 0;
      left: 0;
    }
    > strong {
      font-weight: bold;
      > span {
        display: block;
        font-weight: normal;
        font-size: 12px;
      }
    }
  }
`;

const ButtonGroupStyle = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  > button {
    display: block;
  }
  > button + button {
    margin-top: 5px;
  }
`;
