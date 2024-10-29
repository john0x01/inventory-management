import { json as bodyParserJson, urlencoded } from 'body-parser'
import cors from 'cors'
import express, { Express } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

export function appConfig(app: Express) {
  app.use(express.json())
  app.use(helmet())
  app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
  app.use(morgan('common'))
  app.use(bodyParserJson())
  app.use(urlencoded({ extended: false }))
  app.use(cors())
}
