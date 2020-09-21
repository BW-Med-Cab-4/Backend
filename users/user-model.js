const db = require('../data/connections')

module.exports = {
    find,
    findBy,
    add,
    remove,
    update
}

function find(){
    return db('users');
}

function findBy(filter){
    return db('users').where(filter).orderBy('email');
}

function findById(id){
    return db('users').where({id}).first();
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

function update(id, user) {
    return db("users")
      .where({ id })
      .update(user)
      .then((count) => {
        return findById(id);
      });
  }