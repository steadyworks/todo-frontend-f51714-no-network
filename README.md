# Todo App - Frontend Only

Build a todo application using React that stores data in the browser's localStorage.

## Requirements

### Core Features

1. **Add Todo**: Users can type a todo item in an input field and press Enter or click an "Add" button to add it to the list.
2. **Toggle Complete**: Users can click on a todo item's text to toggle its completion status.
3. **Delete Todo**: Each todo item has a delete button to remove it from the list.
4. **Persistence**: All todos must persist across page reloads using `localStorage`. Use the key `"todos"` for storage.

### UI Requirements

- An input field with `placeholder="Add a new todo"` for entering new todos
- A button with text "Add" to submit new todos
- A list showing all todo items
- Each todo item displays its text
- Completed items should have a `line-through` text decoration on the text
- Each item has a delete button with text "Delete"
- Display the count of remaining (incomplete) items in a format like "X items left"

### Data Model

Each todo should be a JSON object with:
- `id`: unique identifier (use `Date.now().toString()` or similar)
- `text`: string
- `completed`: boolean

### Technical Details

- The React app is already set up with Vite in `/app/frontend/`
- Edit `src/App.jsx` to implement the todo app
- Style with `src/App.css` as needed
