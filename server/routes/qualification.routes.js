import express from 'express';
import qualificationCtrl from '../controllers/qualification.controller.js'; 
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/api/qualifications')
  .get(qualificationCtrl.list)
  .post(qualificationCtrl.create)
  .delete(qualificationCtrl.removeAll);

router.route('/api/qualifications/:id')
  .get(qualificationCtrl.read)
  .put(qualificationCtrl.update)
  .delete(qualificationCtrl.remove);

export default router;