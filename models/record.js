module.exports = (sequelize, DataTypes) => {
    // Dictates how record will appear in DB and as what type
    let Record = sequelize.define('Record', {
        description: {
            type: DataTypes.STRING
        },
        amount: {
            type: DataTypes.STRING
        }
    })
// Syncs record to table and provides log notification
    Record.sync( {force: true} ).then( () => {
        console.log('Synced record table ')
    })

    return Record
}