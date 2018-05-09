# -*- coding: utf-8 -*-

import nltk.classify.util
import csv
import json
import sys
reload(sys)
sys.setdefaultencoding('utf8')
from nltk.classify import NaiveBayesClassifier
from nltk.corpus import movie_reviews
from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.stem import PorterStemmer

dictionaries = ["action", "adventure", "animation", "comedy",
                "crime", "documentary", "drama", "family", "fantasy",
                "history", "horror", "music", "mystery", "romance",
                "science-fiction", "tv-movie", "thriller", "war", "western"]
#dictionaries = ["action.csv", "adventure.csv", "romance.csv", "horror.csv" ]
scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
global result
KeyWords = []
Weights = []

# 1. Tokenize Synopsis


def tokenize_synopsis(synopsis):
    return word_tokenize(synopsis)

# 2. Remove stopwords from Synopsis


def remove_stopwords(synopsis):
    stop_words = set(stopwords.words('english'))
    return [w for w in synopsis if not w in stop_words]


def normalize_synopsis(synopsis):
    ps = PorterStemmer()
    return [ps.stem(w) for w in synopsis]


def cleanSynopsis(synopsis):
    global result
    # 1. Remove Unicode
    synopsis_cleaned = synopsis.encode('ascii', 'ignore')

    # 2. Convert to lowercase
    synopsis_lowercase = synopsis_cleaned.lower()

    # 3. Tokenize Synopsis
    synopsis_tokenized = tokenize_synopsis(synopsis_lowercase)

    # 4. Remove stopwords from Synopsis
    synopsis_without_stopwords = remove_stopwords(synopsis_tokenized)

    # 5. Synopsis words normalizing
    synopsis_normalized = normalize_synopsis(synopsis_without_stopwords)
    result = synopsis_normalized


def clearList(KeyWords, Weights):
    KeyWords[:] = []
    Weights[:] = []


def findGenre():
    i = 0
    for dictionary in dictionaries:
        scores[i] = checkSynopsis(result, "/Users/scastro81/Documents/school/compiladores/film-genre-identifier/api/utils/dictionary/"+dictionary+".csv")
        clearList(KeyWords, Weights)
        i += 1


def getWords(genre):
    text_file = open(genre, "r")
    read = csv.reader(text_file)
    for row in read:
        KeyWords.append(row[0])
        Weights.append(int(row[1]))
    text_file.close()


def checkSynopsis(cleanedSynopsis, genre):
    score = 0
    getWords(genre)
    for word in cleanedSynopsis:
        if(word in KeyWords):
            score += Weights[KeyWords.index(word)]
    return score


def saveScores():
    data = "{ \"scores\":[\n"
    index = 0
    for genre in dictionaries:
        if(index < 18):
            data += "{ \"genre\":\""+genre + \
                "\", \"score\":"+str(scores[index])+"},\n"
        else:
            data += "{ \"genre\":\""+genre + \
                "\", \"score\":"+str(scores[index])+"}\n"
        index += 1
    data += "]}"
    open("result.json", "w+").close()
    text_file = open("result.json", "w")
    text_file.write(data)
    text_file.close()
    return data


def runCheck(synopsis):
    cleanSynopsis(synopsis)
    findGenre()
    return saveScores()

print runCheck(sys.argv[1])

