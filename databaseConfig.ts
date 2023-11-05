// databaseConfig.ts

export const projectConfig: Record<string, any> = {
    gameApp: {
        projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string,
        databaseId: process.env.NEXT_PUBLIC_DATABASE_ID as string,
        todosCollectionId: process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID as string,
    },
    otherProject: {
        projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string,
        databaseId: process.env.NEXT_PUBLIC_DATABASE_ID as string,
        todosCollectionId: process.env.NEXT_PUBLIC2_TODOS_COLLECTION_ID as string,
    },
};


