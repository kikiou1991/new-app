import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Board, Coloumn, Todo, TypedColoumn } from '../typing';
import { getTodosGroupedByColoumn } from '../lib/getTodosGroupedByColoumn';
import { databases } from '../appwrite';


interface BoardState {
    board: Board;
    getBoard: () => void;
    setBoardState: (board: Board) => void;
    updateTodoInDB: (todo: Todo, coloumnId: TypedColoumn) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
    board: {
        coloumns: new Map<TypedColoumn, Coloumn>()
    },
    getBoard: async () => {
        const board = await getTodosGroupedByColoumn();
        set({ board });
    },

    setBoardState: (board) => set({ board }),

    updateTodoInDB: async (todo, coloumnId) => {
        await databases.updateDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
            todo.$id,
            {
                title: todo.title,
                status: coloumnId
            }
        )
    }

}))


