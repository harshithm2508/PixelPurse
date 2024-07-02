import z from 'zod';

export const signUpInput = z.object({
    username : z.string(),
    firstName : z.string(),
    lastName : z.string(),
    mobileNumber : z.string(),
    password : z.string().min(7)
})

export type signUpInputType = z.infer<typeof signUpInput>