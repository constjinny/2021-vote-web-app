export interface IVoteListAPIProps {
  userId: string;
  votesData: IVotesAPIProps[] | [];
}

export interface IVotesAPIProps {
  author: IAuthorAPIProps;
  open_date: number;
  close_date: number;
  vote_id: string;
  vote_name: string;
  vote_options: IVoteOptionAPIProps[];
}

export interface IAuthorAPIProps {
  id: string;
  nick_name: string;
  profile_url: string;
}
export interface IVoteOptionAPIProps {
  option_id: string;
  option_value: string;
  selected_ids: string[] | [];
}
