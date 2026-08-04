import mongoose from 'mongoose';

const QualificationSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  school: { type: String, required: true, trim: true },
  completion: { type: Date, required: true },
  description: { type: String, required: true, trim: true }
});

export default mongoose.model('Qualification', QualificationSchema);
