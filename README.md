### A tutorial showing how to use NodeJS with ReactJS by building a website with routing, and running a frontend and backend server concurrently.

## INSTRUCTION:

Context: Technically, a web app has 2 parts: frontend to display data, interact with client and backend to handle routing, business logic, interact with database.

Application structure:

![image](https://github.com/user-attachments/assets/e72ebbea-b02e-452f-b55d-f7c31bb8d0d1)

1/ Frontend: is built using ReactJS, so as default, it runs on port 3000 (http://localhost:3000/)

To run frontend (ReactJS app), we use command: 'npm run start'

![image](https://github.com/user-attachments/assets/b0ed7999-5152-4166-8c71-f0c41f3c1a80)

![image](https://github.com/user-attachments/assets/f32ee190-cd1a-4db3-b8c3-b99de2a0e0dc)

![image](https://github.com/user-attachments/assets/055f4919-2e46-44b7-be7d-9501495a5259)

IMPORTANT INFO: 

In /frontend/package.json, we add this line: "proxy": "http://localhost:4000/"

Purpose of "proxy" in package.json:

When building a React application that interacts with a backend server (e.g., a Node.js/Express API), the React application often needs to make HTTP requests to this backend.

If your React app is running on http://localhost:3000 and your backend server is running on http://localhost:4000, the browser's Same-Origin Policy would prevent you from making requests from one origin (http://localhost:3000) to another (http://localhost:4000) 

due to cross-origin restrictions.

The "proxy": "http://localhost:4000/" setting in the package.json of the React project allows the React development server to proxy API requests to the backend server running on a different port (in this case, 4000).

![image](https://github.com/user-attachments/assets/30104dc0-fa87-4e40-959a-5dad58655709)

  
   
2/ Backend: is built using NodeJS, we defined port 4000 (or whatever you like), and server will run on this port (http://localhost:4000/)

As we defined some commands in scripts section of /backend/package.json, we can do the followings.

Option 1:

-Open terminal 1, to run backend (NodeJS app), we use command: 'npm run server'

-Open terminal 2, to run frontend (ReactJS app), we use command: 'npm run client'

=> Then, in case both server running properly on their own port AND in /frontend/package.json, we already added: "proxy": "http://localhost:4000/". From frontend we can send request to backend server and get the data successfully. Without this proxy added, 

from frontend, we can not send request and get data.

Option 2:

To run both backend & frontend (on their own port), we use command: 'npm run dev'. Note that we use concurrently dependency to be able to combine 2 commands to run 1 time only.

![image](https://github.com/user-attachments/assets/9ba347fb-eb1f-4933-83d5-10e95cffc28e)

![image](https://github.com/user-attachments/assets/29b207bc-dbe7-4676-9027-9b9db5b3d701)

![image](https://github.com/user-attachments/assets/f0f69010-10e7-4c4e-8cd2-d3c7697f8d1d)

![image](https://github.com/user-attachments/assets/c02b383a-5d05-42f6-ae4e-824efc03afcb)

Data retrieve from backend is displayed properly on frontend :)

![image](https://github.com/user-attachments/assets/4dd1f568-aa4d-41da-8123-c9362306364b)






