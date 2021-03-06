/*  class interface for Topic objects, which includes title, description, 
and a messages array */
import { Message } from "./Message";

export interface Topic {
    id: number;
    title: string;
    description: string;
    messages?: Message[];
}