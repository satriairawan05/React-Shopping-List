import { useState } from "react";
import { Header, Footer, Form, GroceryList } from "./components";
import { groceryItems } from "./utils";

const App = () => {
  const [items, setItems] = useState(groceryItems);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id != id));
  };

  const handleToggleItem = (id) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  };

  const handleClearItems = () => {
    setItems([]);
  };

  return (
    <>
      <div className="app">
        <Header />
        <Form onAddItem={handleAddItem} />
        <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
        <Footer items={items} />
      </div>
    </>
  );
};

export default App;
