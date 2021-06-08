export interface IVoteWriteProps {
  voteData: IVoteWriteDetailProps;
  isError: boolean;
  isSaved: boolean;
}

export interface IVoteWriteDetailProps {
  openDate: string;
  closeDate: string;
  voteId: string;
  voteName: string;
  voteOptions: string[];
}
