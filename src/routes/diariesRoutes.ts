import express from 'express'
import * as diaryControllers from '../controllers/diariesControllers'
const router = express()

router.get('/', (_req, res) => {
  res.status(200).send(diaryControllers.getEntriesWithoutSensitiveInfo())
})

router.post('/', (_req, res) => {
  res.status(200).send('Create diary')
})

export default router
