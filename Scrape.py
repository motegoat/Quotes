import requests
from bs4 import BeautifulSoup

url = 'https://www.goodreads.com/quotes/tag/inspirational'

# Send a GET request to the website
response = requests.get(url)

# Create a BeautifulSoup object to parse the HTML content
soup = BeautifulSoup(response.content, 'html.parser')

# Find all the quote elements
quote_elements = soup.find_all('div', {'class': 'quoteText'})

# Extract the text and author from each quote element
quotes = []
for quote in quote_elements:
    text = quote.get_text().strip().split('\n')[0].strip('"')
    author = quote.find('span', {'class': 'authorOrTitle'}).get_text().strip()
    if len(text.split()) <= 50:  # Check if word count is less or equal to 50
        quotes.append(f'"{text}"</br>- {author},"')

# Append the quotes to a text file
with open('quotes.txt', 'a') as file:
    file.write('\n'.join(quotes))

# Read the contents of the text file
with open('quotes.txt', 'r') as file:
    lines = file.readlines()

# Modify each line to add double quotes
modified_lines = []
for line in lines:
    line = line.strip()
    if line.endswith(','):
        line = '"' + line[:-1] + '",'
    modified_lines.append(line)

# Write the modified lines back to the text file
with open('quotes.txt', 'w') as file:
    file.write('\n'.join(modified_lines))

# Print the number of quotes
added_quotes = len(quotes)
print(f"Added quotes: {added_quotes}")

print("Quotes appended to quotes.txt")
print("Quotes file updated.")
