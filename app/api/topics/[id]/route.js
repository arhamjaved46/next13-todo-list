import connection from "@/libs/mongoDB";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {

    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();

    await connection();
    await Topic.findByIdAndUpdate(id, { title, description });

    return NextResponse.json({ message: "Post updated successfully" }, { status: 200 })
}

export async function GET(request, { params }) {

    const { id } = params;
    await connection();
    const data = await Topic.findOne({ _id: id });

    return NextResponse.json({ data }, { status: 200 });
}