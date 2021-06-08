import { Fragment, ReactElement, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

import { VoteList } from "./VoteList";
import { voteListAction } from "./VoteListSlice";
import { voteListSelector } from "./VoteListSlice";
import { Button } from "../../components/button";

export function VoteListPage(): ReactElement {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const votes = useSelector(voteListSelector.selectVoteList);
  const hasVotes = votes.length > 0;

  const handleCreateVote = () => push("/create");

  useEffect(() => {
    // NOTI: VoteListPage 영역 랜더링 시 초기 데이터 로드
    dispatch(voteListAction.getLoadData());
  }, [dispatch]);

  return (
    <Fragment>
      <ButtonGroupStyle>
        <Button onClick={handleCreateVote}>신규 투표 생성</Button>
      </ButtonGroupStyle>

      {hasVotes ? <VoteList /> : <p>투표가 없습니다.</p>}
    </Fragment>
  );
}

const ButtonGroupStyle = styled.div`
  text-align: right;
`;
