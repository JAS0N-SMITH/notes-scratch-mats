/*  class interface for Topic objects, which includes title, description, 
and a messages array */
import { Message } from "./Message";

export interface Topic {
    title: string;
    description: string;
    messages: Message[];
}