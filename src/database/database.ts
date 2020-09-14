import { openDB, IDBPDatabase } from "idb";
import { DB_NAME, DB_VERSION, SPRINTS_STORE } from "./const";
import store from "../store";


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
    return store.getAll();
}

export async function store(storNames: string, item) {
    
}

export async function put(){

}

init();