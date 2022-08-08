import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const api = axios.create({ baseURL: "http://localhost:3000" });

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Todos />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

type TodoType = {
  id: number;
  title: string;
  active?: boolean;
};

const getTodos = ({ signal }: { signal?: AbortSignal }): Promise<TodoType[]> =>
  api.get("/todos", { signal }).then((response) => response.data);

const postTodo = async (todo: TodoType) => {
  return await api.post("/todos", todo);
};

function Todos() {
  const queryClient = useQueryClient();

  const { data } = useQuery(["todos"], ({ signal }) => getTodos({ signal }));

  const { mutate } = useMutation(postTodo, {
    // When mutate is called:
    onMutate: async (newTodo: TodoType) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(["todos"]);

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData<TodoType[]>(["todos"]);

      // Optimistically update to the new value
      if (previousTodos) {
        queryClient.setQueryData<TodoType[]>(
          ["todos"],
          [...previousTodos, { ...newTodo, active: true }]
        );
      }

      return previousTodos;
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (err, variables, context) => {
      if (context) {
        queryClient.setQueryData<TodoType[]>(["todos"], context);
      }
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  return (
    <div>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id} style={{ color: todo.active ? "gray" : "black" }}>
            {todo.title}
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutate({
            id: Date.now(),
            title: "Do Laundry" + Date.now(),
          });
        }}
      >
        Add Todo
      </button>
      <button onClick={() => queryClient.refetchQueries(["todos"])}>
        Refresh
      </button>
      <button onClick={() => queryClient.cancelQueries(["todos"])}>
        Cancel
      </button>
    </div>
  );
}

export default App;
