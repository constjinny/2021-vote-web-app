import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import dayjs from "dayjs";

import { voteWriteSelector, voteWriteAction } from "./VoteWriteSlice";
import { Input } from "../../components/input";
import { Button, ButtonTheme } from "../../components/button";

export function VoteWrite(): ReactElement {
  const dispatch = useDispatch();
  const voteData = useSelector(voteWriteSelector.selectVoteData);
  const { closeDate, openDate, voteName, voteOptions } = voteData;
  const toDate = dayjs().format("YYYY-MM-DD");

  const handleChangeVoteName = (value: string) => {
    dispatch(voteWriteAction.updateVoteName(value));
  };

  const handleChangeVoteOpenDate = (value: string) => {
    const changeClose =
      closeDate && dayjs(closeDate).valueOf() - dayjs(value).valueOf() <= 0;
    if (changeClose) {
      const closeDate = dayjs(value).add(24, "hour").format("YYYY-MM-DD");
      dispatch(
        voteWriteAction.updateVoteOpenDate({ openDate: value, closeDate })
      );
    } else {
      dispatch(voteWriteAction.updateVoteOpenDate({ openDate: value }));
    }
  };

  const handleChangeVoteCloseDate = (value: string) => {
    dispatch(voteWriteAction.updateVoteCloseDate(value));
  };

  const handleAddVoteOptions = (value: string) => {
    dispatch(voteWriteAction.addOptionsDate());
  };

  const handleUpdateVoteOptions = (value: string, index: number) => {
    dispatch(voteWriteAction.updateOptionsDate({ value, index }));
  };

  const handledeleteVoteOptions = (index: number) => {
    dispatch(voteWriteAction.deleteOptionsDate({ index }));
  };

  return (
    <VoteWriteStyle>
      <dl>
        <dt>투표 제목</dt>
        <dd>
          <Input
            value={voteName}
            placeholder={"투표 제목을 입력하세요."}
            onChange={handleChangeVoteName}
          />
        </dd>
      </dl>
      <dl>
        <dt>시작 일자</dt>
        <dd>
          <Input
            type="date"
            value={openDate || ""}
            placeholder={"투표 시작 일자를 입력하세요."}
            min={toDate}
            onChange={handleChangeVoteOpenDate}
          />
        </dd>
      </dl>
      <dl>
        <dt>종료 일자</dt>
        <dd>
          <Input
            type="date"
            value={closeDate || ""}
            placeholder={"투표 종료 일자를 입력하세요."}
            min={openDate || toDate}
            onChange={handleChangeVoteCloseDate}
          />
        </dd>
      </dl>
      <dl>
        <dt>투표 항목</dt>
        <dd>
          <div>
            {voteOptions.map((option: any, index: number) => {
              const minLength = voteOptions.length <= 3;
              return (
                <VoteOptionStyle key={index}>
                  <span>{index + 1}</span>
                  <Input
                    key={index}
                    value={option}
                    placeholder={"투표 항목을 입력하세요."}
                    onChange={(value: string) =>
                      handleUpdateVoteOptions(value, index)
                    }
                  />

                  <Button
                    isDisabled={minLength}
                    onClick={() => handledeleteVoteOptions(index)}
                  >
                    삭제
                  </Button>
                </VoteOptionStyle>
              );
            })}
          </div>
          <div>
            <Button theme={ButtonTheme.Full} onClick={handleAddVoteOptions}>
              새 항목 추가
            </Button>
          </div>
        </dd>
      </dl>
    </VoteWriteStyle>
  );
}

const VoteWriteStyle = styled.div`
  display: block;
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #cacaca;
  background: #fff;
  box-sizing: border-box;
  > dl {
    display: flex;
    > dt {
      margin-right: 20px;
      padding-top: 6px;
      font-size: 14px;
    }
    > dd {
      flex: 1;
      > div + div {
        margin-top: 20px;
      }
    }
  }
  > dl + dl {
    margin-top: 20px;
  }
`;

const VoteOptionStyle = styled.div`
  display: flex;
  & + & {
    margin-top: 10px;
  }
  > span {
    width: 20px;
    padding-top: 6px;
    font-size: 14px;
  }
  > input {
    margin-right: 20px;
  }
`;
