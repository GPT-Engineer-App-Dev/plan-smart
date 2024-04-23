// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Box, Input, Button, List, ListItem, ListIcon, IconButton, Heading } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      <Heading mb={4}>Todo List</Heading>
      <Box display="flex" mb={4}>
        <Input placeholder="Add new todo" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} />
        <Button ml={2} onClick={handleAddTodo} leftIcon={<FaPlus />} colorScheme="blue">
          Add
        </Button>
      </Box>
      <List spacing={3}>
        {todos.map((todo, index) => (
          <ListItem key={index} display="flex" alignItems="center">
            <ListIcon as={FaPlus} color="green.500" />
            {todo}
            <IconButton aria-label="Delete todo" icon={<FaTrash />} colorScheme="red" variant="ghost" ml="auto" onClick={() => handleDeleteTodo(index)} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
