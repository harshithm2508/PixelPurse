import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate' 
import { userRouter } from '../routes/user'

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string;
  }
}>()


app.route('api/v1/user',userRouter);

app.get('/', (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

  return c.text('Hello Hono!')
})

export default app
