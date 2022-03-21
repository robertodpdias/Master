const { Model, DataTypes } = require('sequelize');

class turmaComponente extends Model{
    static init(datacon) {
        super.init({
            id_turma: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'turmas',
                    foreignKey: 'id'
                }
            },
            id_componente: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'componentes',
                    foreignKey: 'id'
                }
            }
        },
        {
            sequelize: datacon,
            tableName: 'turma_componentes',
            modelName: 'turmaComponente',
        }
        );
    }
    static associate(models) {
        turmaComponente.belongsTo(models.turma, {foreignKey: 'id_turma'});
        turmaComponente.belongsTo(models.componente, {foreignKey: 'id_componente'});
    }
}
module.exports = turmaComponente;