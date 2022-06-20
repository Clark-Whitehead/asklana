import openai
import sys

api_key = "sk-a3nFqMMwwqkiqvGZ9KTr7YXiGX0ZhEUpUznv6fBS"
openai.api_key = api_key

my_prompt = sys.argv[1]

my_engine = "davinici"

my_tokens = 100

response = openai.Completion.create(
  engine="davinci",
  prompt= my_prompt,
  max_tokens= my_tokens
)


print(response["choices"][0]["text"])