import { Models } from "appwrite";

interface Board {
    coloumns: Map<TypedColumn, Coloumn>
}

type TypedColoumn = "todo" | "inprogress" | "done";
type Prio = "low" | "medium" | "high" | "completed";

interface Coloumn {
    id: TypedColoumn;
    todos: Todo[];
}

interface Todo {
    $id: string;
    $createdAt: string;
    title: string;
    status: TypedColoumn;
    image?: string;
    priority: Prio;
}

interface Image {
    bucketId: string;
    fileId: string;
}