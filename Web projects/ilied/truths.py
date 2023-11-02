print("hello")

print("hi")

# The student said "Why isn't every day Taylor Swift day"?
# print('The student said "Why isn\'t every day Taylor Swift day"?'

print ("Let's play Natalia's two truths and a lie game")
print ("1. I have lived in Ireland") # truth
print ("2. I have lived in Germany") # lie
print ("3. I have lived in Poland") # truth

# now let's get usar input
print () # empty line
user_answer=input("Which one is the lie?")

# use logic to get an answer
if user_answer == "1":
    print("Wrong, I lived in Ireland until I was 1")
    print("And by that I mean a few months")

elif user_answer == "2":
    print("Correct, never lived there only slightly genetically German.")

elif user_answer == "3":
    print("Wrong, was born there and lived there for a few months")

else:
        print("Please imput 1, 2, or 3!")