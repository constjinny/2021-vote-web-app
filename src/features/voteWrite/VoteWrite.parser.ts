import dayjs from "dayjs";

import { IVoteWriteDetailProps } from "./type";
import {
  IAuthorAPIProps,
  IVotesAPIProps,
  IVoteOptionAPIProps,
} from "../../api/type";

const VoteWriteParser = (voteData: IVotesAPIProps) => {
  if (voteData) {
    const { open_date, close_date, vote_id, vote_name, vote_options } =
      voteData;

    const filterVoteOptions = vote_options.map(
      (option: IVoteOptionAPIProps) => option.option_value
    );

    return {
      openDate: dayjs(open_date).format("YYYY-MM-DD"),
      closeDate: dayjs(close_date).format("YYYY-MM-DD"),
      voteId: vote_id,
      voteName: vote_name,
      voteOptions: filterVoteOptions,
    };
  }
};

const VoteWriteToAPIParser = (
  userData: IAuthorAPIProps,
  voteData: IVoteWriteDetailProps
) => {
  if (voteData) {
    const { openDate, closeDate, voteId, voteName, voteOptions } = voteData;

    const changeOptons = voteOptions.map((option: string, index: number) => {
      return {
        option_id: `${voteId}-option${index}`,
        option_value: option,
        selected_ids: [],
      };
    });

    return {
      author: userData,
      open_date: dayjs(openDate).valueOf(),
      close_date: dayjs(closeDate).valueOf(),
      vote_id: voteId,
      vote_name: voteName,
      vote_options: changeOptons,
    };
  }
};

export { VoteWriteParser, VoteWriteToAPIParser };
