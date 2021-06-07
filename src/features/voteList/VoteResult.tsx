import { ReactElement } from "react";
import styled from "@emotion/styled";

import { IVoteItemProps, IVoteOptionProps } from "./type";

export function VoteResult({ data }: { data: IVoteItemProps }): ReactElement {
  const { voteOptions, isResultId } = data;

  return (
    <VoteDetailStyle>
      <OptionListStyle>
        {voteOptions.map((option: IVoteOptionProps, index: number) => {
          const { optionId, optionValue, selectedIds, count } = option;
          const isResult = isResultId === optionId;
          const SelectedIdList = selectedIds.map((id: string) => (
            <span key={id}>{id}</span>
          ));

          return (
            <OptionStyle key={optionId} isResult={isResult}>
              <span>{index + 1}</span>

              <div>
                {optionValue}
                <span>{`${count} 명`}</span>
              </div>

              {SelectedIdList && (
                <SelectedIdsStyle>{SelectedIdList}</SelectedIdsStyle>
              )}
            </OptionStyle>
          );
        })}
      </OptionListStyle>
    </VoteDetailStyle>
  );
}

const VoteDetailStyle = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #cacaca;
  box-sizing: border-box;
`;

const OptionListStyle = styled.ul`
  > p {
    margin-bottom: 10px;
  }
`;

const OptionStyle = styled.li<{ isResult: boolean }>`
  overflow: hidden;
  position: relative;
  margin-top: 10px;
  padding: 10px 20px 10px 50px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #cacaca;
  ${({ isResult }) => isResult && "border-color: #5ea9e7;"};
  > span {
    position: absolute;
    top: 10px;
    left: 20px;
    width: 20px;
    height: 20px;
    text-align: center;
    font-weight: bold;
    line-height: 20px;
    border-radius: 50%;
    background-color: ${({ isResult }) => (isResult ? "#5ea9e7" : "#cacaca")};
    color: #fff;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const SelectedIdsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  > span {
    margin: 5px 2px;
    padding: 1px 5px;
    border-radius: 5px;
    background-color: #cacaca;
    color: #fff;
  }
`;
