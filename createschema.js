#!node
const { Sequelize, Model, DataTypes, Deferrable  } = require('sequelize');

const config = require('config');
let _HOST = config.get('_HOST');
let _USER = config.get('_USER');
let _DB = config.get('_DB');
let _DBTYPE = config.get('_DBTYPE');
let _PASS = config.get('_PASS');
let _PORT = config.get('_PORT');

const sequelize = new Sequelize(_DB, _USER, _PASS, {
    host: _HOST,
    port: _PORT,
    dialect: _DBTYPE
});


const Card = sequelize.define('card', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique : true,
        primaryKey: true,
        comment: 'auto id'
    },
    customer_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'customer id'
    },
    useradmin_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'useradmin id'
    },
    card_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        comment: 'card id'
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    sequelize,
    freezeTableName: true, 
    timestamps: true,
    createdAt: true,
    updatedAt: 'updatedAt',
    comment: 'card table'
});

// console.log(Card === sequelize.models.Card); 

async function Card_make() {
    await Card.sync({ force: true });
    console.log("####The table for the Card model was just (re)created!####");
    await console.log('====>CREATE SUCCESSFULLY....!<====');
    await Card.create({ customer_id: 1, useradmin_id: 2, card_id: "XXAADDSE" });
    await Card.create({ customer_id: 3, useradmin_id: 3, card_id: "ERVB3454" });
    await Card.create({ customer_id: 2, useradmin_id: 1, card_id: "TYNBY678" });
    await Card.create({ customer_id: 2, useradmin_id: 3, card_id: "TYNBY478" });
    await Card.create({ customer_id: 3, useradmin_id: 1, card_id: "TYNBY578" });
    await Card.create({ customer_id: 2, useradmin_id: 2, card_id: "TYNKY678" });
    await Card.create({ customer_id: 3, useradmin_id: 1, card_id: "TYNBY778" });
    await Card.create({ customer_id: 2, useradmin_id: 2, card_id: "TYNBY878" });
    await Card.create({ customer_id: 2, useradmin_id: 1, card_id: "TYNBY978" });
    sequelize.close();
}

Card_make();
