export interface IVoteListStateProps {
  userId: string;
  voteList: IVoteItemProps[] | [];
}

export interface IVoteItemProps {
  author: { id: string; nickName: string; profileUrl: string };
  isEdit: boolean;
  isOpen: boolean;
  isClose: boolean;
  isSelectId: string;
  isResultId: string;
  openDate: string;
  closeDate: string;
  voteId: string;
  voteName: string;
  voteOptions: IVoteOptionProps[] | [];
}

export interface IVoteOptionProps {
  optionId: string;
  optionValue: string;
  selectedIds: string[] | [];
  count: number;
}
