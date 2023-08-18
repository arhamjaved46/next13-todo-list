import connection from "@/libs/mongoDB";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {

    const { title, description } = await request.json();
    await connection();

    await Topic.create({
        title,
        description
    });

    return NextResponse.json({
        message: "Post Created"
    }, {
        status: 201,
    })

}

export async function GET() {

    await connection();
    const posts = await Topic.find();

    return NextResponse.json({ posts });
}

export async function DELETE(req) {

    const id = req.nextUrl.searchParams.get("id");
    await connection();
    await Topic.findByIdAndDelete(id);

    return NextResponse.json({ message: "Post deleted." }, { status: 200 });

}