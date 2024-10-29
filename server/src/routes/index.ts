import { Express } from 'express'
import dashboardRoutes from './dashboardRoutes'
import expenseRoutes from './expenseRoutes'
import productRoutes from './productRoutes'
import userRoutes from './userRoutes'

export function routes(app: Express) {
  app.use('/dashboard', dashboardRoutes)
  app.use('/products', productRoutes)
  app.use('/users', userRoutes)
  app.use('/expenses', expenseRoutes)
}
