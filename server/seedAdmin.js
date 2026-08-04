import mongoose from 'mongoose'
import config from '../config/config.js'
import User from './models/user.model.js'

if (!config.adminEmail || !config.adminPassword) {
  throw new Error('Set ADMIN_EMAIL and ADMIN_PASSWORD in .env before seeding an admin user.')
}

await mongoose.connect(config.mongoUri)
const existing = await User.findOne({ email: config.adminEmail })

if (existing) {
  existing.role = 'admin'
  existing.password = config.adminPassword
  await existing.save()
  console.log('Existing admin account and password updated.')
} else {
  await new User({
    name: 'Portfolio Administrator',
    email: config.adminEmail,
    password: config.adminPassword,
    role: 'admin',
  }).save()
  console.log('Admin account created.')
}

await mongoose.disconnect()
