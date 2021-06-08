import dayjs from "dayjs";

import {
  IVoteListAPIProps,
  IVotesAPIProps,
  IVoteOptionAPIProps,
} from "../../api/type";
import { SortUtil } from "../../utils";

const VoteListParser = ({ userId, votesData }: IVoteListAPIProps) => {
  const toData = dayjs().valueOf();

  if (votesData.length > 0) {
    const sortVotesData = SortUtil.sortedOderValue(
      votesData,
      "close_date",
      false
    );

    const filterVotesData = sortVotesData.map((vote: IVotesAPIProps) => {
      const {
        author,
        open_date,
        close_date,
        vote_id,
        vote_name,
        vote_options,
      } = vote;
      const { id, nick_name = "", profile_url = "" } = author;

      const filterAuthor = { id, nickName: nick_name, profileUrl: profile_url };
      const isOpen = open_date - toData < 0;
      const isEdit = author.id === userId && !isOpen;
      const isClose = close_date - toData < 0;
      const filterVoteOptions = vote_options.map(
        (option: IVoteOptionAPIProps) => {
          const {
            option_id = "",
            option_value = "",
            selected_ids = [],
          } = option;
          return {
            optionId: option_id,
            optionValue: option_value,
            selectedIds: selected_ids,
            count: selected_ids.length,
          };
        }
      );
      const resultOptionId = isClose
        ? SortUtil.sortedOderValue(vote_options, "count", false)[0]?.option_id
        : "";
      const checkSelectOptionId = vote_options?.find(
        (option: IVoteOptionAPIProps) => {
          const { selected_ids } = option;
          const checkId = selected_ids.find((id: string) => id === userId);
          return checkId;
        }
      )?.option_id;

      return {
        author: filterAuthor,
        isEdit: isEdit || false,
        isOpen: isOpen || false,
        isClose: isClose || false,
        isSelectId: checkSelectOptionId || "",
        isResultId: resultOptionId,
        openDate: dayjs(open_date).format("YYYY년 M월 D일") || "",
        closeDate: dayjs(close_date).format("YYYY년 M월 D일") || "",
        voteId: vote_id || "",
        voteName: vote_name || "",
        voteOptions: filterVoteOptions || [],
      };
    });

    return filterVotesData;
  }
  return [];
};

export default VoteListParser;
