import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/layout/Layout";
import Routes from "./components/routes/Routes";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";

const queryClient = new QueryClient();

function App() {


  
  return (
    <ShoppingCartContextProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes />
        </Layout>
      </QueryClientProvider>
    </ShoppingCartContextProvider>
  );
}

export default App;
