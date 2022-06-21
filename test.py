import openai
import sys

api_key = "sk-a3nFqMMwwqkiqvGZ9KTr7YXiGX0ZhEUpUznv6fBS"
openai.api_key = api_key

my_prompt = sys.argv[1]

my_engine = "text-davinci-002"

my_tokens = 150

response = openai.Completion.create(
    engine=my_engine,
    prompt=my_prompt,
    temperature=0.7,
    max_tokens=my_tokens,
    top_p=1,
    frequency_penalty=0.30,
    presence_penalty=0.31,
    stop=["Human:"]
)

print(response["choices"][0]["text"])