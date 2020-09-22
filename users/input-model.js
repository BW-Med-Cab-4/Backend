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
    return db('userinput')
}

function findBy(filter){
    console.log(filter)
    return db('userinput').where(filter).orderBy('userid');
}

function findById(id){
    return db('userinput').where({id}).first();
}

async function add(set){
    try{
        const [id] = await db('userinput').insert(set, 'id');
        return findById(id);
    }catch(error){
        throw error;
    }
}

function remove(id){
    return db('userinput').where({id}).delete();
}

function update(id, set) {
    return db("userinput")
      .where({ id })
      .update(set)
      .then((count) => {
        return findById(id);
      });
  }