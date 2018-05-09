import nltk.classify.util
import csv
import json
from nltk.classify import NaiveBayesClassifier
from nltk.corpus import movie_reviews
from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.stem import PorterStemmer

available_genres = ["action", "adventure", "animation", "comedy", "crime",
                    "documentary", "drama", "family", "fantasy", "history",
                    "horror", "music", "mystery", "romance", "science-fiction",
                    "tv-movie", "thriller", "war", "western"]
#available_genres = ["action_100","action_101"]
genre_json = []
myFilteredSentence = []
weightFilteredSentence = []

# reset Arrays


def resetArrays():
    global myFilteredSentence
    global weightFilteredSentence
    myFilteredSentence = []
    weightFilteredSentence = []

# Load JSON


def loadJson(fileName):
    global genre_json
    genre_json = json.load(open('data/' + fileName + '.json'))

# Clear CSV file to prevent duplicated data
# or create a new file if doesn't exists


def verifyFile(fileName):
    open("dictionary/" + fileName + ".csv", "w+").close()

# 1. Clean unicode from synopsis


def clean_unicode(synopsis):
    return synopsis.encode('ascii', 'ignore')

# 2. Convert to synopsis to lowercase


def lowercase_synopsis(synopsis):
    return synopsis.lower()

# 3. Tokenize Synopsis


def tokenize_synopsis(synopsis):
    return word_tokenize(synopsis)

# 4. Remove stopwords from Synopsis


def remove_stopwords(synopsis):
    stop_words = set(stopwords.words('english'))
    return [w for w in synopsis if not w in stop_words]

# 5. DISABLED - Synopsis words normalizing


def normalize_synopsis(synopsis):
    ps = PorterStemmer()
    return [ps.stem(w) for w in synopsis]


def cleanSynopsis(synopsis):
    synopsis_without_unicode = clean_unicode(synopsis)
    synopsis_lowercase = lowercase_synopsis(synopsis_without_unicode)
    synopsis_tokenized = tokenize_synopsis(synopsis_lowercase)
    synopsis_without_stopwords = remove_stopwords(synopsis_tokenized)
    return synopsis_without_stopwords


def saveToDictionary(fileName):
    text_file = open("dictionary/" + fileName + ".csv", "w")
    line = 0
    for w in myFilteredSentence:
        if (weightFilteredSentence[line] > 1):
            text_file.write(w + ",")
            text_file.write(str(weightFilteredSentence[line]) + ",")
            text_file.write("\r\n")
        line += 1
    text_file.close()


def createDictionary(genre_json):
    pos = 0
    for synopsis in genre_json["movies"]:

        current_synopsis = genre_json["movies"][pos]["overview"]
        cleaned_synopsis = cleanSynopsis(current_synopsis)
        pos += 1

        for w in cleaned_synopsis:

            # If word is not already in the dictionary
            # Filter out short tokens (w > 2)
            if w not in myFilteredSentence and len(w) > 2:
                myFilteredSentence.append(w)
                weightFilteredSentence.append(1)

            # If word is already in the dictionary
            else:
                i = 0
                while i < len(myFilteredSentence):
                    if (myFilteredSentence[i] == w):
                        weightFilteredSentence[i] += 1
                        break
                    i += 1


def generateDictionaries():
    for genre in available_genres:
        resetArrays()
        loadJson(genre)
        verifyFile(genre)
        createDictionary(genre_json)
        saveToDictionary(genre)
        print(genre + " dictionary successfully generated!")


generateDictionaries()
