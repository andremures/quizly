// @flow
import React from "react";
import { connect } from "react-redux";
import DisplayToggle from "components/DisplayToggle";
import SortByToggle from "components/SortByToggle";
import styles from "styles/mydeckslist.module.css";

import type { State } from "types/states";

const mapStateToProps = (state: State, ownProps: Object) => ({
  filter: state.myDecks.filter,
});

const MyDeckListHeaderComponent = ({ filter }) => {
  return (
    <div className={styles.header}>
      <DisplayToggle />
      <SortByToggle />
      <div className={styles.searchbar}>{filter}</div>
      <button className={styles.addDeck}>
        <span
          style={{ position: "relative", top: 0.5, left: -2, fontSize: 30 }}
        >
          +
        </span>
        <div style={{ display: "inline-block", padding: "8px 0" }}>
          &nbsp;Deck
        </div>
      </button>
    </div>
  );
};

export const MyDeckListHeader = connect(mapStateToProps)(
  MyDeckListHeaderComponent
);

const DeckItem = ({ number }) => {
  return (
    <div className={styles.deckItem}>
      <span>Title {number.toString()}</span>
    </div>
  );
};

const MyDeckList = () => {
  const deckList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className={styles.container}>
      {deckList.map((n) => (
        <DeckItem key={n} number={n} />
      ))}
    </div>
  );
};

export default MyDeckList;
