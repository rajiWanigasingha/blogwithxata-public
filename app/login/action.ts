"use server";
import { cookies } from "next/headers";
import { getXataClient } from "../lib/xata/xata";
import * as jose from 'jose'

const xata = getXataClient();

export async function Loginuser(state: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const page = await xata.db.user
    .filter("email", `${email}`)
    .select(["email", "name", "password"])
    .getPaginated({
      pagination: {
        size: 15,
      },
    });

  if (page.records.length > 0) {
    if (page.records[0].password === password) {

        const secret = new TextEncoder().encode(
          `${process.env.NEXT_PUBLIC_JWT_SECRET}`,
        )
        const alg = 'HS256'
        
        const token = await new jose.SignJWT()
          .setProtectedHeader({ alg })
          .setExpirationTime('24h')
          .setSubject(page.records[0].id)
          .sign(secret)

        cookies().set({
            name:'token',
            value:token,
            httpOnly:true,
            path:'/',
            expires: Date.now() + (24 * 60 * 60 * 1000),
            sameSite: 'strict'
        })

        return {message:"Login success"}
    } else {
      return { message: "Wrong password" };
    }
  } else {
    return { message: "Wrong email" };
  }
}
