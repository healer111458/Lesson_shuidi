module.exports = app => {
    const { STRING, INTEGER, DATE, NOW } = app.Sequelize;
    const User = app.model.define('users', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: { 
          type: STRING(255),
          primaryKey: true,
          autoIncrement: true
    },
      email: { type: STRING(255),allowNull: false},
      password: { type: STRING(255),allowNull: false},
      username: { type: STRING(255),allowNull: false},
      mobile: STRING(11),
      sex: { type:INTEGER, defaultValue:true},
      created_at: { type: DATE, defaultValue: NOW},
      updated_at: { type: DATE, defaultValue: NOW},
    }, {
      freezeTableName: true
    });
    return User;
  }