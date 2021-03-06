// @flow

export type DisplayType = "list" | "grid";
export type SortByType = "alphanum" | "tag";

type UserState = {
  username: string,
};

type MyDecksState = {
  display: DisplayType,
  sortBy: SortByType,
  filter: string,
};

export type State = {
  activeUser: UserState,
  myDecks: MyDecksState,
};
