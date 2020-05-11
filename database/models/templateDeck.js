/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
  const templateDeck = sequelize.define('templateDeck', {
    cardsIds: DataTypes.ARRAY(DataTypes.TEXT),
  }, {});

  return templateDeck;
};
