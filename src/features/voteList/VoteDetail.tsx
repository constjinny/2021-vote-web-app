import { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { isEmpty } from "lodash";

import { voteListAction, voteListSelector } from "./VoteListSlice";
import { IVoteItemProps, IVoteOptionProps } from "./type";
import { Button, ButtonTheme } from "../../components/button";

export function VoteDetail({ data }: { data: IVoteItemProps }): ReactElement {
  const dispatch = useDispatch();
  const userId = useSelector(voteListSelector.selectUserId);
  const [selectValueId, setSelectValueId] = useState("");
  const { isOpen, isClose, openDate, voteOptions, isSelectId, voteId } = data;

  const handleResultOption = () =>
    dispatch(
      voteListAction.updateVoteOptionCount({
        userId,
        voteId,
        optionId: selectValueId,
      })
    );

  const Description = isSelectId ? (
    <p>🗳 이미 투표를 하셨습니다.</p>
  ) : !isOpen ? (
    <p>🗳 {openDate} 부터 투표 가능합니다.</p>
  ) : null;

  return (
    <VoteDetailStyle>
      <OptionListStyle>
        {Description && Description}

        {voteOptions.map((option: IVoteOptionProps, index: number) => {
          const { optionId, optionValue, count } = option;
          const isSelect =
            optionId === selectValueId || optionId === isSelectId;
          const isDisabled = !isOpen || isClose || !isEmpty(isSelectId);

          const handleSelectValue = () =>
            !isDisabled && setSelectValueId(optionId);

          return (
            <OptionStyle
              key={optionId}
              isSelect={isSelect}
              isDisabled={isDisabled}
              onClick={handleSelectValue}
            >
              <span>{index + 1}</span>

              <div>
                {optionValue}
                <span>{`${count} 명`}</span>
              </div>
            </OptionStyle>
          );
        })}
      </OptionListStyle>

      {isOpen && !isClose && isEmpty(isSelectId) && (
        <ButtonGroupStyle>
          <Button
            theme={ButtonTheme.Full}
            onClick={handleResultOption}
            isDisabled={isEmpty(selectValueId)}
          >
            투표하기
          </Button>
        </ButtonGroupStyle>
      )}
    </VoteDetailStyle>
  );
}

const VoteDetailStyle = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #cacaca;
  background: #fff;
  box-sizing: border-box;
`;

const OptionListStyle = styled.ul`
  > p {
    margin-bottom: 10px;
  }
`;

const OptionStyle = styled.li<{ isSelect: boolean; isDisabled: boolean }>`
  overflow: hidden;
  position: relative;
  margin-top: 10px;
  padding: 10px 20px 10px 50px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #cacaca;
  ${({ isSelect }) => isSelect && "border-color: #5ea9e7"};
  ${({ isDisabled }) => isDisabled && "background-color: #eeeeee;"};
  &:hover {
    ${({ isDisabled }) =>
      !isDisabled &&
      "cursor: pointer; border-color: #457aa7; box-shadow: rgba(149, 157, 165, 0.9) 0px 10px 24px;"};
  }
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
    background-color: ${({ isSelect }) => (isSelect ? "#5ea9e7" : "#cacaca")};
    color: #fff;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > span {
      display: inline-block;
    }
  }
`;

const ButtonGroupStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #cacaca;
`;
