
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('template_decks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    cardsIds: {
      allowNull: false,
      type: Sequelize.ARRAY(Sequelize.TEXT),
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('template_decks'),
};
