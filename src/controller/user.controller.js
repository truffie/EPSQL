const express = require('express');
const { createSkill,
  getAllSkills, updateSkillsById,
  deleteSkillsById,
  PatchByid } = require('../service/user.service');

const route = express.Router();
route.get('/', async (req, res) => {
  try {
    const data = await getAllSkills();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message)
  }
})
route.post('/', async (req, res) => {
  const { label, category, priority } = req.body;
  const data = await createSkill(label, category, priority);
  res.send(data);
});
route.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { label, category, priority } = req.body;
  const data = await updateSkillsById(id, label, category, priority);
  res.send(data);
})
route.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await deleteSkillsById(id);
  res.send(data);
});

route.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const data = await PatchByid(id, body);
  res.send(data);
});


module.exports = route;