import db from '../../database';

class CommissionsService {
    async getCommissions() {
       const execution = await db.query('SELECT * FROM commissions');
       const [rows] = execution;    
       return rows;
    }
    async createCommission(data) {
        const {name, percentage} = data;
        const execution = await db.query(
            'INSERT INTO commissions (name, percentage) VALUES (?, ?)',
            [name, percentage]
        );
        const insertID = execution[0].insertId;
        return { id: insertID, name, percentage };
    }
    async updateCommission(id, data) {
        const {name, percentage} = data;
        const execution = await db.query(
            'UPDATE commissions SET name = ?, percentage = ? WHERE id = ?',
            [name, percentage, id]
        );
        const affectedRows = execution[0].affectedRows;
        if (affectedRows === 0) {
            throw new Error('Comisión no encontrada');
        }
        return { id, name, percentage };
    }
    async deleteCommission(id) {
        const [results] = await db.query('DELETE FROM commissions WHERE id = ?', [id]);
        if (results.affectedRows === 0) {
            throw new Error('Comisión no encontrada');
        }
        return { message: 'Comisión eliminada' };
    }
    async getCommissionById(id) {
        const execution = await db.query('SELECT * FROM commissions WHERE id = ?', [id]);
        if (execution[0].length === 0) {
            throw new Error('Comisión no encontrada');
        }
        return execution[0][0];
    }
}