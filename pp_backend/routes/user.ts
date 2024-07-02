import { Hono } from "hono";
import { signUpInput } from "@harshithm2508/pixelpurse-common";
import {loginInput} from "@harshithm2508/pixelpurse-common"
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode,sign, verify } from "hono/jwt";
import { cors } from "hono/cors";

export const userRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string;
        mySecretKey : string
    }
}>()

userRouter.use(cors())

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


        const jwtPayload = {
            username : body.username
        }
        return c.json({'message' : "User successfully signed up"})
    }catch(e){
        return c.json({
            'error' : "Unable to create the user"
        })
    }
})

userRouter.post('/login',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

    const body = await c.req.json();

    const zodCheck = await loginInput.safeParse(body);

    if(!zodCheck.success){
        return c.json({'error' : "Wrong input types"})
    }

    try{
        const user = await prisma.user.findUnique({
            where : {
                username : body.username
            }
        })

        if(!user){
            return c.json({'message' : "User not found"}, {status : 404} )
        }

        if(user?.password === body.password){

            const jwtPayload = {
                username : body.username
            }
            const jwtToken = await sign(jwtPayload,c.env.mySecretKey);
            console.log(jwtToken)


            return c.json({'message' : "User logged in",'jwt' : jwtToken})}
        
        else if(user.password !== body.password)
            return c.json({'message' : "wrong password"}, {status : 401})
    }
    catch(e){
        return c.json({'message' : "wrong password"});
    }
})