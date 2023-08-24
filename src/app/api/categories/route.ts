import { NextResponse } from "next/server";
// Simulate to DB request (MongoDB .. etc)
import categories from './Categories.json';

export const GET = () => {
   return NextResponse.json(categories)
}