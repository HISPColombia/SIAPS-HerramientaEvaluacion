/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feature', {
    feoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    suoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'subdimension',
        key: 'suoid'
      }
    }
  }, {
    tableName: 'feature'
  });
};
