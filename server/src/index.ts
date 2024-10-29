import express from 'express'
import { appConfig } from './config'

const app = express()

app.use(appConfig)
