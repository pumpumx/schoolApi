<h2>🏫 School API</h1>

A TypeScript-based REST API for managing school data and user authentication, featuring geospatial queries, JWT-based authentication, and modular error handling. Built with Express.js and MongoDB (Mongoose).

🚀 Features
👤 User Authentication: Register, login, and delete account with hashed passwords using bcrypt.

📍 School Management: Add schools with geolocation (latitude/longitude) and fetch nearby schools.

🌍 Geospatial Queries: MongoDB $near queries to find schools within 50 km.

🔒 JWT Authorization: Secure endpoints using token verification middleware.

⚙️ Utilities: Consistent error and response handling via reusable utility classes.

📦 Tech Stack
Backend: Node.js, Express.js

Language: TypeScript

Database: MongoDB with Mongoose

Security: JWT, bcrypt.js

Validation: Custom input validation

🛠️ Setup Instructions

1. Clone the Repo

git clone https://github.com/pumpumx/schoolApi.git

cd schoolApi

2. Install Dependencies

npm install

3. Configure Environment Variables

Create a .env file in the root directory:

See the sample .env.sample file

4. Run the Server
   
npm run dev

📘 API Endpoints
🔐 Auth Routes
	
POST	/api/v1/users/register-user

Register a new user

POST	/api/v1/users/login

Log in existing user

DELETE	/api/v1/users/delete-user-account

Delete logged-in user account

🏫 School Routes

POST	/api/v1/school/addSchool	

Add a new school (auth required)

POST	/api/v1/school/listSchools	

Get nearby schools by coordinates (auth required)

⚠️ All routes (except register/login) require a valid JWT token in cookies.

📌 Example Requests
➕ Register User

curl -X POST http://localhost:5000/api/v1/users/register-user \

  -H "Content-Type: application/json" \
  
  -d '{
  
    "username": "johnsmith",
    "email": "john@example.com",
    "password": "securePass123"
    
  }'
  
➕ Login User

curl -X POST http://localhost:5000/api/v1/users/login \

  -H "Content-Type: application/json" \
  
  -d '{
  
    "usernameOrEmail": "johnsmith",
    "password": "securePass123"
    
  }'

➕ Add School

curl -X POST http://localhost:3000/api/v1/school/addSchool \

-H "Content-Type: application/json" \

-d '{

	"schoolName":"Sunrise High","address":"123 Main St",
	"longitude":77.5,"latitude":12.9

}'

📍 List Nearby Schools

curl -X POST http://localhost:3000/api/v1/school/listSchools \

-H "Content-Type: application/json" \

-d '{

	"longitude":77.5,
 	"latitude":12.9
  
  }'

🧩 Utilities

AsyncHandler – Wrapper for async/await error handling.

ApiError – Custom error class for consistent error responses.

ApiResponse – Standard response format.

JWT verification middleware for securing routes.

📝 License
MIT License

🤝 Contributing
Feel free to open issues or submit pull requests to improve the project. Contributions are welcome!
