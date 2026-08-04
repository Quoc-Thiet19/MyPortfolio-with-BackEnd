import mongoose from 'mongoose';
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  completion: { type: Date, required: true },
  description: { type: String, required: true, trim: true },
  tech: { type: String, default: '', trim: true }
});
export default mongoose.model('Project', ProjectSchema);
