const { createSkillDB, getUsersDB,
  getAllSkillsDB, updateSkillsByIdDB, getSkillsByIdDB,
  deleteSkillsByIdDB, 
  PatchByidDB} = require('../repository/user.repository');

async function createSkill(label, category, priority) {
  const data = await createSkillDB(label, category, priority);
  return data;
};
async function getUsers() {
  const data = await getUsersDB();
  return data;
}
async function getAllSkills() {
  const data = await getAllSkillsDB();
  return data;
}
async function updateSkillsById(id, label, category, priority) {
  const data = await updateSkillsByIdDB(id, label, category, priority);
  return data;
}
async function deleteSkillsById(id) {
  const data = await deleteSkillsByIdDB(id);
  return data;
}
async function PatchByid(id, body) {
const data = await PatchByidDB(id,body); 
return data;
}
module.exports = {
  createSkill, getUsers, getAllSkills, updateSkillsById,
  deleteSkillsById,PatchByid
};