import { openDB, IDBPDatabase } from "idb";
import { DB_NAME, DB_VERSION, SPRINTS_STORE } from "./const";


let db: IDBPDatabase<unknown>;

export async function init(): Promise<void> {
    db = await openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
            if(!db.objectStoreNames.contains(SPRINTS_STORE)) {
                db.createObjectStore(SPRINTS_STORE, {autoIncrement: true});
            }
        }
    });
}


export async function getAll(storeNames: string) : Promise<any[]> {
    const transaction = db.transaction(storeNames, "readwrite");
    const store = transaction.objectStore(storeNames);
    return await store.getAll();
}

export async function store<T>(storNames: string, item: T) {
    const transaction = db.transaction(storNames, "readwrite");
    const store = transaction.objectStore(storNames);
    await store.add(item);
    return await transaction.done;
}

export async function put<T>(storNames: string, item: T){
    const transaction = db.transaction(storNames, "readwrite");
    const store = transaction.objectStore(storNames);
    await store.add(item);
    return await transaction.done;
}

export async function remove(storNames: string, key) {
    const transaction = db.transaction(storNames, "readwrite");
    const store = transaction.objectStore(storNames);
    await store.delete(key);
    return await transaction.done;
}

init();