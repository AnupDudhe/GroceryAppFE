import { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function GroceryList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Fetch all grocery items from the API when the component mounts
  useEffect(() => {
    fetch(`${API_URL}/api/groceries`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  // Add a new item by sending a POST request to the API
  const addItem = () => {
    if (inputValue.trim() === "") return;

    fetch(`${API_URL}/api/groceries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: inputValue }),
    })
      .then((res) => res.json())
      .then((newItem) => {
        setItems([...items, newItem]);
        setInputValue("");
      })
      .catch((err) => console.error("Error adding item:", err));
  };

  // Remove an item by sending a DELETE request to the API
  const removeItem = (id) => {
    fetch(`${API_URL}/api/groceries/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setItems(items.filter((item) => item._id !== id));
      })
      .catch((err) => console.error("Error deleting item:", err));
  };

  // Inline Styles
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f4f4f4",
      fontFamily: "Arial, sans-serif",
    },
    groceryBox: {
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      width: "350px",
      textAlign: "center",
    },
    inputContainer: {
      display: "flex",
      gap: "10px",
      marginBottom: "15px",
    },
    input: {
      flex: "1",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      padding: "8px 12px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
    listItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#eee",
      padding: "8px",
      borderRadius: "5px",
      marginBottom: "5px",
    },
    removeButton: {
      backgroundColor: "#dc3545",
      padding: "5px 10px",
      fontSize: "14px",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.groceryBox}>
        <h1>Grocery List</h1>

        <div style={styles.inputContainer}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter an item"
            style={styles.input}
          />
          <button onClick={addItem} style={styles.button}>
            Add
          </button>
        </div>

        <ul style={{ padding: 0, listStyleType: "none" }}>
          {items.map((item) => (
            <li key={item._id} style={styles.listItem}>
              <span>{item.name}</span>
              <button
                onClick={() => removeItem(item._id)}
                style={styles.removeButton}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// import { useState, useEffect } from "react";

// export default function GroceryList() {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   // Fetch all grocery items from the API when the component mounts
//   useEffect(() => {
//     fetch("http://localhost:5000/api/groceries")
//       .then((res) => res.json())
//       .then((data) => setItems(data))
//       .catch((err) => console.error("Error fetching items:", err));
//   }, []);

//   // Add a new item by sending a POST request to the API
//   const addItem = () => {
//     if (inputValue.trim() === "") return;

//     fetch("http://localhost:5000/api/groceries", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name: inputValue }),
//     })
//       .then((res) => res.json())
//       .then((newItem) => {
//         // MongoDB will return an object with _id property.
//         setItems([...items, newItem]);
//         setInputValue("");
//       })
//       .catch((err) => console.error("Error adding item:", err));
//   };

//   // Remove an item by sending a DELETE request to the API
//   const removeItem = (id) => {
//     fetch(`http://localhost:5000/api/groceries/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then(() => {
//         setItems(items.filter((item) => item._id !== id));
//       })
//       .catch((err) => console.error("Error deleting item:", err));
//   };

//   // Inline Styles
//   const styles = {
//     container: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       minHeight: "100vh",
//       backgroundColor: "#f4f4f4",
//       fontFamily: "Arial, sans-serif",
//     },
//     groceryBox: {
//       background: "white",
//       padding: "20px",
//       borderRadius: "10px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//       width: "350px",
//       textAlign: "center",
//     },
//     inputContainer: {
//       display: "flex",
//       gap: "10px",
//       marginBottom: "15px",
//     },
//     input: {
//       flex: "1",
//       padding: "8px",
//       border: "1px solid #ccc",
//       borderRadius: "5px",
//       fontSize: "16px",
//     },
//     button: {
//       backgroundColor: "#007bff",
//       color: "white",
//       border: "none",
//       padding: "8px 12px",
//       borderRadius: "5px",
//       cursor: "pointer",
//       fontSize: "16px",
//     },
//     listItem: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       background: "#eee",
//       padding: "8px",
//       borderRadius: "5px",
//       marginBottom: "5px",
//     },
//     removeButton: {
//       backgroundColor: "#dc3545",
//       padding: "5px 10px",
//       fontSize: "14px",
//       color: "white",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.groceryBox}>
//         <h1>Grocery List</h1>

//         <div style={styles.inputContainer}>
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Enter an item"
//             style={styles.input}
//           />
//           <button onClick={addItem} style={styles.button}>
//             Add
//           </button>
//         </div>

//         <ul style={{ padding: 0, listStyleType: "none" }}>
//           {items.map((item) => (
//             <li key={item._id} style={styles.listItem}>
//               <span>{item.name}</span>
//               <button
//                 onClick={() => removeItem(item._id)}
//                 style={styles.removeButton}
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
