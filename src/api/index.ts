import { Router } from 'express';

import version from './version';
import hwid from './hwid';

const router = Router();

router.use('/version', version);
router.use('/hwid', hwid);

router.get('/*', (req, res) => {
  res.json({ error: true, message: '404 Not Found' });
});

export default router;
