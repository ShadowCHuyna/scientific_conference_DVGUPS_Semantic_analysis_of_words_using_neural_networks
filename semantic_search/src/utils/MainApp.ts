import { useUnit } from "effector-react"
import { $activeCollection, $k, $query, setAnswer, setAnswerStatus, setListCollections } from "../models/app"
import { SearchResult } from "./SearchResult"


export namespace MainApp {
    export async function init() {
        const res = await (await fetch("http://94.125.55.181:4000/list_collections", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36",
            }
        })).json()
        res["list_collections"] = res["list_collections"].map((value: any) => (
            value.name
        ))

        setListCollections(res["list_collections"])
        // query()
    }

    export async function query() {
        if ($activeCollection.getState() === "" || $query.getState() === "" || $k.getState() <= 0) return

        setAnswerStatus("load");

        // const data = {
        //     collection_name: $activeCollection.getState(),
        //     query: $query.getState(),
        //     k: $k.getState(),
        // }

        const res = await (await fetch(`http://94.125.55.181:4000/query?collection_name=${$activeCollection.getState()}&query=${$query.getState()}&k=${$k.getState()}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36",
            },
            // body: JSON.stringify(data)
        })).json()

        let answer: Array<SearchResult> = []

        for (let i = 0; i < res["ids"][0].length; i++) {
            // console.log(res["ids"][0][i]);
            let label = res["metadatas"][0][i]["source"]
            label = label.replace("https://lk.dvgups.ru/public/upload/library/typography/", "")
            label = label.split("/")[1]


            answer.push({ 
                id: res["ids"][0][i], 
                label: label, 
                data: res["documents"][0][i], 
                url: res["metadatas"][0][i]["source"]
            })
        }


        setAnswer(answer)

        setAnswerStatus("ok");

        // console.log(answer);

    }
}