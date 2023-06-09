const User = require('./User');
const project = require('./project');

User.hasMany(project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

project.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { User, project };