import { writeData, readData, readOneUser, deleteOneUser } from './handleData.js';


const getAllUsers = async (req, res) => {
    const allUsers = await readData();
  
    res.json(allUsers);
}

const getOneUser = async (req, res) => {
  const {id} = req.params;
  const user = await readOneUser(id);
  res.json(user);
}


const createUser = async (req, res) => {
    const data = req.body;
    await writeData(data);
  
    res.send('Postando');
}

const updateUser = (req, res) => {
    
  res.send('Atualizando');
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    await deleteOneUser(id);
    res.json({status: "sucess"});
}


export { 
    getAllUsers,
    getOneUser, 
    createUser, 
    updateUser, 
    deleteUser };