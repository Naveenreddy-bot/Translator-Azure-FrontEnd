### This repository contains the code for a React frontend that interacts with the backend API to provide translation functionality using the Microsoft Translator service.

Version : 1.0.0

Prerequisites :

Node.js and npm installed on your machine.

### Getting Started

Clone the repository:  git clone https://github.com/Naveenreddy-bot/Translator-Azure-FrontEnd.git

### Install the dependencies: 

cd Translator-Azure-FrontEnd

npm i 

Update the api end point for your app, in my case i have a droplet in digital ocean 

The Backend api repo is https://github.com/Naveenreddy-bot/Translator-Azure-Backend

<img width="483" alt="image" src="https://github.com/Naveenreddy-bot/Translator-Azure-FrontEnd/assets/123338659/932805cc-c156-4680-8036-880cf03b8c6b">

### Start the development server:

npm start

### Features
Translation: The frontend sends a POST request to the backend API with the text to be translated. The API communicates with the Microsoft Translator service and returns the translated text.

### API Endpoint.  POST /translate

Description: Translates the input text to the target language using the Microsoft Translator service.
Request:

Method: POST

Endpoint: /translate

Request Body:

{
  "text": "Enter the text to be translated"
}

Headers:
Content-Type: application/json

Response:

Status Code: 200 (OK)

Data Encoding: JSON

Response Body:

{
  "translation": "Translated text"
}

<img width="1552" alt="image" src="https://github.com/Naveenreddy-bot/Translator-Azure-FrontEnd/assets/123338659/5307e175-e046-47e9-a04f-91b5ee13fc7a">


### Error Handling:

If there is an error during translation or communication with the Microsoft Translator service, the API will respond with an appropriate error status code and an error message.

### Usage

Enter the text you want to translate in the input field.
Click the "Translate" button to initiate the translation to Hindi since in code we used Hindi as a input.
The translated text will be displayed below.


### Contributing

Contributions are welcome! If you find any issues or want to add new features to the frontend, feel free to open a pull request.

### License

This project is licensed under the MIT License.
