import TaskList from "./TaskList";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-white text-black rounded-lg p-6 shadow-lg w-96">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
