
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: DataTypes.STRING,
    value: DataTypes.STRING,
    suit: DataTypes.STRING,
    isJoker: DataTypes.BOOLEAN,
  }, {});

  return Card;
};
