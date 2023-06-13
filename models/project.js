const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        project_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        project_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // project_link: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // project_github: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // project_image: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // project_technologies: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // project_collaborators: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        project_date: {
            type: DataTypes.DATE,
            allowNull: false, 
            defaultValue: DataTypes.NOW
        },
        project_status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        project_notes: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key:'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'project'
    }
);

module.exports = Project;

