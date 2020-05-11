
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('cards', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    value: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    suit: {
      type: Sequelize.STRING,
    },
    isJoker: {
      type: Sequelize.BOOLEAN,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('cards'),
};
