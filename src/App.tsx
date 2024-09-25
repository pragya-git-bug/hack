import { ThemeProvider } from "./components/ThemeProvider";
import AuthProvider from "react-auth-kit";
import { store } from "./lib/store";
import RouteComponent from "./components/RouteComponent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthProvider store={store}>
          <RouteComponent />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
