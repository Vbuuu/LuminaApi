import { Router, Request, Response } from 'express';

import changelogs from '../values/changelog.json';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ error: false, version: '0.6' });
});

router.get('/changelog', (req: Request, res: Response) => {
  res.json({ error: false, changelog: changelogs });
});

export default router;
