import { useState, useEffect } from "react"



const TodoApp=()=>{
  const [todoInput, setTodoInput] = useState("")
  const [todos, setTodos] = useState([])

// Input değişikliklerini takip eden fonksiyon
  const handleInputChange = (e)=>{
    setTodoInput(e.target.value)
  };

   // "Ekle" butonuna tıklanınca çalışan fonksiyon
  const handleAddTodo = ()=>{
    setTodos([...todos, todoInput]);
    setTodoInput("");
  }

   // Yeni bir fonksiyon oluşturulması 
   const addTodo = () => {
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };

  // useEffect hook'u ile todos state'ini konsola yazdırma
  useEffect(() => {
    
  }, [todos]);
  
   // Adım 7: "ul" ve "li" elementleri oluşturulması
   const todoList = todos.map((todo, index) => (
    <li key={index} onClick={() => handleRemoveTodo(index)}>{todo}</li>
  ));

  // Adım 11: Liste elemanına hover efekti eklenmesi
  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <label htmlFor="todoInput">Hedef</label>
      <input
        type="text"
        id="todoInput"
        value={todoInput}
        onChange={handleInputChange}
      />
      {/* Adım 8: addTodo fonksiyonu Ekle butonuna tıklandığında çalışacak */}
      <button onClick={addTodo}>Ekle</button>
      
      {/* Adım 7: todos array'ini map ederek li elementleri oluşturulması */}
      <ul>
        {todoList}
      </ul>
    </div>
  );
};

export default TodoApp
