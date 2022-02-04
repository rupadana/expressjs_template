'use strict';
const {
  Model
} = require('sequelize');
const { Bcrypt, Storage } = require('../../services');
const { merge_permission, has_access } = require('../../services/permissions');
module.exports = (sequelize, DataTypes) => {

  const PROTECTED_ATTRIBUTES = ['password', 'token']
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
    hasAccess(permission) {
      return has_access( `${permission}`, merge_permission( JSON.parse(this.UserRole.Role.permissions), JSON.parse(this.UserRole.permissions)))
    }

    toJSON () {
      // hide protected fields
      let attributes = Object.assign({}, this.get())
      for (let a of PROTECTED_ATTRIBUTES) {
        delete attributes[a]
      }
      return attributes
    }
  };
  User.init({
    fullname: DataTypes.STRING,
    phone: {
      type: DataTypes.STRING,
      unique: {
        args:true,
        msg: "No telp. sudah digunakan",
        fields: [sequelize.fn("lower", sequelize.col('phone'))]
      }
    },
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue('password', Bcrypt.encrypt(value))
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};