"use server"

import { revalidatePath } from "next/cache"
import { getXataClient } from "../lib/xata/xata"
import { redirect } from "next/navigation"

export async function Createlog(formData:FormData){

    const title = formData.get("title")
    const summary = formData.get("summary")
    const discription = formData.get("discription")

    const xata = getXataClient()

    const create = await xata.db.blog.create({
        //@ts-ignore
        title:title,
        summery:summary,
        para:discription
    })

    revalidatePath('/')

    redirect('/')
}