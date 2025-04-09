# GroceryAppFE 🚀  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  

## 📌 Getting Started  
Follow these steps to set up and run the project locally.  

### ✅ Prerequisites  
Ensure you have the following installed on your system:  
in .env file of frontend code make following changes :-
```
REACT_APP_API_URL=http://webserverpublicIP:5000
```
- **[Node.js](https://nodejs.org/)** (LTS version recommended)  
- **npm** (Comes with Node.js)  
### install node js 
```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```



### 📥 Installation 
1. **Clone the repository:**  
   ```sh
   git clone https://github.com/your-username/GroceryAppFE.git    
   cd GroceryAppFE
   npm install
   npm install dotenv
   npm start
### To build your frontend use following comman
```
   npm run build //to build you fe
```
### lets get our front production grade ready on server
```
npm install
npm run build
pm2 list
pm2 serve build/ 3000 --name "grocery-frontend" --spa
```

### frontend deployment ref :- 
<img width="959" alt="image" src="https://github.com/user-attachments/assets/4254a14d-43ee-4b91-97ab-6682d0f3cac8" />

