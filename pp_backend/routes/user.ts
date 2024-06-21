import { Hono } from "hono";
import { signUpInput } from "@harshithm2508/pixelpurse-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const userRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string
    }
}>()

userRouter.post('/signup',async (c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

    const body = await c.req.json();

    const zodCheck = await signUpInput.safeParse(body);
    
    if(!zodCheck.success){
        return c.json({'message': 'Incorrect input types from user'})
    }

    try{

        const user = await prisma.user.create({
            data : {
                username : body.username,
                firstName : body.firstName,
                lastName : body.lastName,
                mobileNumber : body.mobileNumber,
                password : body.password

            }
        })
        return c.json({'message' : "user successfully signed up"})
    }catch(e){
        return c.json({
            'error' : e
        })
    }
})