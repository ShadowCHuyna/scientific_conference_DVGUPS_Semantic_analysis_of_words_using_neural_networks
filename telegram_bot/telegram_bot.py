from simpl_state import SimplState
import telebot
from telebot import types
import requests
import json 
# import chromadb
# from chromadb.utils import embedding_functions

# chroma_client = chromadb.HttpClient(host='localhost', port=8000)

# sentence_transformer_ef = embedding_functions.SentenceTransformerEmbeddingFunction(model_name="paraphrase-multilingual-MiniLM-L12-v2")
# lib_2004 = chroma_client.get_or_create_collection("lib_collection", embedding_function=sentence_transformer_ef)

def query(query_texts):
    res = requests.get(f"http://0.0.0.0:4000/query?collection_name=lib_collection&query={query_texts}&k=10")
    response = json.loads(res.text)
    return response


print("start chroma")

bot = telebot.TeleBot('7143244101:AAEgIrngo-G6yrZ9XJOESyDROU3V3w2u9Fw')
states = SimplState()

print("start bot")


@bot.message_handler(commands=['start'])
def send_welcome(message):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    btn_query = types.KeyboardButton("/query")
    markup.add(btn_query)

    bot.send_message(message.from_user.id, "Привет! Я бот, созданный для помощи в поиске информации в метадических материалах библиотеки ДВГУПС.\nЧтобы найти интересующую вас методичку, просто отправьте сообщение с вопросом.")
    bot.send_message(message.from_user.id, "команда /query для начала поиска", reply_markup=markup)

@bot.message_handler(commands=['query'])
def query_start(message):
    bot.send_message(message.from_user.id, "задайте вопрос")

    bot.register_next_step_handler(message, query_find)

def query_find(message):
    res = query(query_texts=message.text)
    # print(res)
    if len(res["documents"][0]) == 0:
        bot.send_message(message.from_user.id, "К сожалению ничего не найдено.")
        pass
    states.add_state(message, res, 0)

    bot.send_message(message.from_user.id, f"найдено "+str(len(res["documents"][0])) + " методичек. Вот первая")

    show_res(message)

def show_res(message):
    state = states.get_state(message)
    res = state.result
    i = state.i

    url = res["metadatas"][0][i]["source"]
    url = url.replace("lib_dvgups", "https://lk.dvgups.ru/public/upload/library/typography/2004")

    if i < (len(res["documents"][0])-1):
        markup = types.InlineKeyboardMarkup()
        btn_ns = types.InlineKeyboardButton('показать следующую', callback_data='next')
        markup.add(btn_ns)
        bot.send_message(message.from_user.id, res["documents"][0][i] + "\n\n\n" + url, reply_markup=markup)
    else:
        bot.send_message(message.from_user.id, res["documents"][0][i] + "\n\n\n" + url)

        states.remove_state(message)

@bot.callback_query_handler(func=lambda call: True)
def callback_query(call):
    state = states.get_state(call)
    if not state: 
        pass

    if call.data == "next":
        state.i = state.i+1
        show_res(call)


bot.polling(non_stop=True)
