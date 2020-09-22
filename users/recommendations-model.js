const db = require('../data/connections')

module.exports = {
    find,
    findBy,
    findById,
    add,
    remove,
    update
}

function find(){
    return db('recommendations')
}

function findBy(filter){
    console.log(filter)
    return db('recommendations').where(filter).orderBy('userid');
}

function findById(id){
    return db('recommendations').where({id}).first();
}

async function add(set){
    try{
        const [id] = await db('recommendations').insert(set, 'id');
        return findById(id);
    }catch(error){
        throw error;
    }
}

function remove(id){
    return db('recommendations').where({id}).delete();
}

function update(id, set) {
    return db("recommendations")
      .where({ id })
      .update(set)
      .then((count) => {
        return findById(id);
      });
  }