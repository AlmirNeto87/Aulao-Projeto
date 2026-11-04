import fs from 'fs/promises';

const writeData = async (data) =>{
    let actualData = [];
    
    try {
        actualData = await readData();
    } catch (error) {
        console.log(error);
    }
    actualData.push(data);
    const newData = JSON.stringify(actualData, null, 4);
    
    await fs.writeFile("./db/data.json", newData)
}

const readOneUser = async (id) => {
    const allUsers = await readData();
    const user = allUsers.find((user) => user.id === id);
    return user;
}

const deleteOneUser = async (id)=>{
    const allUsers = await readData();

    const updatedUsers = allUsers.filter((user) => user.id !== id);
    await fs.writeFile("./db/data.json", JSON.stringify(updatedUsers, null, 4));
}
const updateOneUser = async (id, alter) =>{
    const allUsers = await readData();
    
    const actualData = allUsers.map(el => el.id != id ? el : Object.assign(el, alter));  
    const newData = JSON.stringify(actualData, null, 4);
    await fs.writeFile("./db/data.json", newData);  
}

const readData = async () => {
    try {
        const data = await fs.readFile("./db/data.json", "utf-8");
        return JSON.parse(data);
    }
     catch (error) {
        console.log(error);
    }   
    
    
    return [];
}


export {
    writeData,
    readData,
    readOneUser,
    deleteOneUser,
    updateOneUser
};