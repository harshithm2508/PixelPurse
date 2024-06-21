import z from 'zod';
export declare const signUpInput: z.ZodObject<{
    username: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    mobileNumber: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    firstName: string;
    lastName: string;
    mobileNumber: string;
    password: string;
}, {
    username: string;
    firstName: string;
    lastName: string;
    mobileNumber: string;
    password: string;
}>;
export type signUpInputType = z.infer<typeof signUpInput>;
