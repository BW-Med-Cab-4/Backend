const db = require('../data/connections')

module.exports = {
    find,
    findById,
    add
}

function find(){
    return db('users');
}

function findById(id){
    return db('users').where({id}).first()
}

async function add(user){
    try{
        const [id] = await db('users').insert(user, 'id');
        return findById(id);
    }catch(error){
        throw error;
    }

}

function remove(id){
    return db('users').where({id}).delete();
}