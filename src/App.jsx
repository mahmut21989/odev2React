import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 24px;
  padding: 12px;
`;

const TodoElement= styled.li`
  cursor: pointer;
`


function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  
   // enter yapınca inputun içindeki yazının eklenmesi
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Bu, sayfanın yeniden yüklenmesini önlemek için kullanılabilir.
      addTodo();
    }
  };
  // enter yapınca inputun içindeki yazının eklenmesi
  const addTodo = () => {
    if (todos.includes(todoInput) || todoInput.trim() === "") {
      return;
    }
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };
  return (
    <>
   <div>
   <InputWrapper>
      <Form style={{
        flex:1
      }}>
      <Form.Group className="" controlId="exampleForm.ControlInput1">
        <Form.Label>Hedef</Form.Label>
        <Form.Control
        value={todoInput}
        onChange={(e) =>{
          setTodoInput(e.target.value);
        }} 
        onKeyDown={handleKeyDown}
        type="text" placeholder="Lüffen Bilgileri Giriniz" />
      </Form.Group>
    </Form>
    <Button
      onClick={()=>{
        if(todos.includes(todoInput)){
          return;
        }
        setTodos([...todos, todoInput])
        setTodoInput("")
      }}
     variant="success">Ekle</Button>{' '}
    </InputWrapper>
    <ul>
      {todos.map((todo, index) => 
      <TodoElement
        onClick={()=>{
          setTodos((oldValues)=>{
            return oldValues.filter((oldTodo)=>oldTodo!==todo);
          });
        }}
       key={index}>{todo}
       </TodoElement>)}
    </ul>
   </div>
    </>
  )
}

export default App
