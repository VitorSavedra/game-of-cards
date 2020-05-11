/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    templateDeckId: DataTypes.INTEGER,
    cardsInDeckCount: DataTypes.INTEGER,
    cardsOutOfDeckCount: DataTypes.INTEGER,
    cardsInDeck: DataTypes.JSON,
    cardsOutOfDeck: DataTypes.JSON,
    status: DataTypes.STRING,
  }, {});

  return Deck;
};
