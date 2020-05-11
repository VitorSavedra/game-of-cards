
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('decks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    templateDeckId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    cardsInDeckCount: {
      type: Sequelize.INTEGER,
    },
    cardsOutOfDeckCount: {
      type: Sequelize.INTEGER,
    },
    cardsInDeck: {
      type: Sequelize.JSON,
    },
    cardsOutOfDeck: {
      type: Sequelize.JSON,
    },
    status: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('decks'),
};
