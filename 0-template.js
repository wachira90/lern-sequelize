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


const Usertb = sequelize.define('usertb', {
    usertb_id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        unique : true,
        allowNull: false,
        primaryKey: true,
        comment: 'auto id'
    },

    updby: {
        type: DataTypes.STRING(32),
        allowNull: false,
        // unique: true,
        comment: 'update by id'
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
    comment: 'usertb table'
});

// console.log(Usertb === sequelize.models.Usertb);

async function Usertb_make() {
    await Usertb.sync({ force: true });
    // console.log("####The table for the Usertb model was just (re)created!####");
    await console.log('====>CREATE SUCCESSFULLY....!<====');
    await Usertb.create({ usertb_id: 1,  updby:"1234"  });
    await Usertb.create({ usertb_id: 2,  updby:"1234" });
    await Usertb.create({ usertb_id: 3,  updby:"1234" });
    await Usertb.create({ usertb_id: 4,  updby:"1234" });
    await Usertb.create({ usertb_id: 5,  updby:"1234" });
    await Usertb.create({ usertb_id: 6,  updby:"1234" });
    await Usertb.create({ usertb_id: 7,  updby:"1234" });
    await Usertb.create({ usertb_id: 8,  updby:"1234" });
    await Usertb.create({ usertb_id: 9,  updby:"1234" });
    sequelize.close();
}

Usertb_make();
