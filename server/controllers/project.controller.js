import Project from '../models/project.model.js';

const list = async (req, res) => {
  try {
    let projects = await Project.find();
    res.json(projects);
  } catch (err) { 
    return res.status(400).json({ error: err.message }); 
  }
};

const read = async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
  } catch (err) { 
    return res.status(400).json({ error: err.message }); 
  }
};

const create = async (req, res) => {
  const project = new Project(req.body);
  try {
    await project.save();
    return res.status(200).json({ message: "Successfully created!" });
  } catch (err) { 
    return res.status(400).json({ error: err.message }); 
  }
};

const update = async (req, res) => {
  try {
    let project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(project);
  } catch (err) { 
    return res.status(400).json({ error: err.message }); 
  }
};

const remove = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) { 
    return res.status(400).json({ error: err.message }); 
  }
};

const removeAll = async (req, res) => {
  try {
    await Project.deleteMany({});
    res.json({ message: "All projects deleted successfully" });
  } catch (err) { 
    return res.status(400).json({ error: err.message }); 
  }
};

export default { list, read, create, update, remove, removeAll };