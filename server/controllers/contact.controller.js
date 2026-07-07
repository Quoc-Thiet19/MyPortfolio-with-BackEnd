import Contact from '../models/contact.model.js';

const list = async (req, res) => {
  try {
    let contacts = await Contact.find();
    res.json(contacts);
  } catch (err) { return res.status(400).json({ error: err.message }); }
};

const read = async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    res.json(contact);
  } catch (err) { return res.status(400).json({ error: err.message }); }
};

const create = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    return res.status(200).json({ message: "Successfully created!" });
  } catch (err) { return res.status(400).json({ error: err.message }); }
};

const update = async (req, res) => {
  try {
    let contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(contact);
  } catch (err) { return res.status(400).json({ error: err.message }); }
};

const remove = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) { return res.status(400).json({ error: err.message }); }
};

const removeAll = async (req, res) => {
  try {
    await Contact.deleteMany({});
    res.json({ message: "All contacts deleted successfully" });
  } catch (err) { return res.status(400).json({ error: err.message }); }
};

export default { list, read, create, update, remove, removeAll };