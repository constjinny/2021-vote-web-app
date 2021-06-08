import { Fragment, ReactElement, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { isUndefined } from "lodash";

import { VoteWrite } from "./VoteWrite";
import { voteWriteAction, voteWriteSelector } from "./VoteWriteSlice";
import { Button } from "../../components/button";

export function VoteWritePage(): ReactElement {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const { vote_id: modifyId } = useParams<{ vote_id: string }>();
  const isModify = !isUndefined(modifyId);
  const isError = useSelector(voteWriteSelector.selectError);
  const isSaved = useSelector(voteWriteSelector.selectSaved);

  const handleSaveVote = () => {
    dispatch(voteWriteAction.saveVoteData({ isModify }));
  };

  useEffect(() => {
    if (isSaved) {
      push("/list");
    } else if (isError) {
    }
  }, [push, isError, isSaved]);

  useEffect(() => {
    if (isModify) {
      // NOTI: 수정이면 기존 데이터를 불러들임
      dispatch(voteWriteAction.getVoteData({ voteId: modifyId }));
    }
    return () => {
      // NOTI: 신규면 초기화 데이터를 불러들임
      dispatch(voteWriteAction.setVoteData());
    };
  }, [dispatch, isModify, modifyId]);

  return (
    <Fragment>
      <ButtonGroupStyle>
        <em>{isError && "😅 모든 항목을 입력해주세요."}</em>
        <Button onClick={handleSaveVote}>투표 저장</Button>
      </ButtonGroupStyle>

      <VoteWrite />
    </Fragment>
  );
}

const ButtonGroupStyle = styled.div`
  display: flex;
  justify-content: space-between;
  > em {
    color: #e64848;
  }
`;
