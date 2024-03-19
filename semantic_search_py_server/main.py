from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import chromadb
from chromadb.utils import embedding_functions

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

chroma_client = chromadb.HttpClient(host='localhost', port=8000)
sentence_transformer_ef = embedding_functions.SentenceTransformerEmbeddingFunction(model_name="paraphrase-multilingual-MiniLM-L12-v2", device="cuda")

lib_collection = chroma_client.get_or_create_collection("lib_collection", embedding_function=sentence_transformer_ef)

# list_collections = chroma_client.list_collections()

# collections = {}

# for c in list_collections:
    # print(c)
    # collections[c] = chroma_client.get_collection(c["name"], embedding_function=sentence_transformer_ef)


@app.get("/query")
async def query(collection_name: str, query: str, k: int):
    # res = lib_2004.query(query_texts=message.text)
    # lib_collection = chroma_client.get_or_create_collection(collection_name, embedding_function=sentence_transformer_ef)

    # return  chroma_client.get_collection(collection_name, embedding_function=sentence_transformer_ef).query(query_texts=query, n_results=k)
    return lib_collection.query(query_texts=query, n_results=k)

# [{
#         "url": "https://lk.dvgups.ru/public/upload/library/typography/1997-1999/Anisimov_V.A.Vasiljev_A.S.Izuchenie_ustrojstva_i_vypolnenie_poverok_geodezicheskih_priborov._Uchebnoe_posobie.docx",
#         "data": "что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то",
#         "label": "Anisimov_V.A.Vasiljev_A.S.Izuchenie_ustrojstva_i_vypolnenie_poverok_geodezicheskih_priborov._Uchebnoe_posobie",
#         "id": 0
    # }]


# @app.post("/query_file")
# async def query(file: UploadFile, query: str, k: int):
#     return {
#             "file": file.filename,
#             "query": query,
#             "k": k
#             }

@app.get("/list_collections")
async def query():
    return {
            "list_collections": chroma_client.list_collections()
            }