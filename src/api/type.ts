export interface IVoteListAPIProps {
  userId: string;
  votesData: IVotesAPIProps[] | [];
}

export interface IVotesAPIProps {
  author: { id: string; nick_name: string; profile_url: string };
  open_date: number;
  close_date: number;
  vote_id: string;
  vote_name: string;
  vote_options: IVoteOptionAPIProps[];
}

export interface IVoteOptionAPIProps {
  option_id: string;
  option_value: string;
  selected_ids: string[] | [];
}
