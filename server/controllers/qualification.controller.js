import Qualification from '../models/qualification.model.js';

const list = async (req, res) => {
  try {
    let qualifications = await Qualification.find();
    res.json(qualifications);
  } catch (err) { return res.status(400).json({ error: err.message }); }
};

const read = async (req, res) => {
  try {
    let qualification = await Qualification.findById(req.params.id);
    if (!qualification) return res.status(404).json({ error: "Qualification not found" });
    res.json(qualification);
  } catch (err) { return res.status(400).json({ error: err.message }); }
};

const create = async (req, res) => {
  const qualification = new Qualification(req.body);
  try {
    await qualification.save();
    return res.status(200).json({ message: "Successfully created!" });
  } catch (err) { return res.status(400).json({ error: err.message }); }
};

const update = async (req, res) => {
  try {
    let qualification = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(qualification);
  } catch (err) { return res.status(400).json({ error: err.message }); }
};

const remove = async (req, res) => {
  try {
    await Qualification.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) { return res.status(400).json({ error: err.message }); }
};

const removeAll = async (req, res) => {
  try {
    await Qualification.deleteMany({});
    res.json({ message: "All qualifications deleted successfully" });
  } catch (err) { return res.status(400).json({ error: err.message }); }
};

export default { list, read, create, update, remove, removeAll };