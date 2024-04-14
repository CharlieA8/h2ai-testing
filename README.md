# Where2Next

This project is a basic setup combining Next.js for the frontend and Flask for the backend to run Python scripts. It utilizes Selenium with ChromeDriver for web automation tasks.

## Getting Started

To run the client, navigate to the `where2next` directory and install the required Node.js dependencies using npm:

```bash
cd where2next
npm install
npm install next
```

Next, return to the root directory and install the necessary Python dependencies and ChromeDriver:

```bash
pip install -r requirements.txt
```

Additionally, download the appropriate ChromeDriver version compatible with your Chrome browser.

## Running the Application

### Frontend (Next.js)

To start the Next.js development server, run:

```bash
npm run dev
```

The development server will be available at `http://localhost:3000`.

### Backend (Flask)

To run the Flask backend, execute:

```bash
python app.py
```

The Flask server will start running at `http://localhost:5000`.

## Dependencies

### Frontend
- Next.js

### Backend
- Flask
- Flask-CORS

### Python Libraries
- Selenium
- Other dependencies listed in `requirements.txt`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).
