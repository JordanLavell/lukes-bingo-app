import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import BingoGrid from "./BingoGrid/BingoGrid";

function App() {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Container style={{ padding: "2rem" }}>
          <Box sx={{ flexGrow: 1 }} marginBottom={"2rem"}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Lukeys Bingo Palace
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
          <Box marginBottom={"1rem"} justifyContent="space-between">
            <Button
              onClick={() => setIsShowing(!isShowing)}
              variant="contained"
              style={{ marginRight: "1rem" }}
            >
              Show Bingo
            </Button>
            <Button
              onClick={() => setRefresh(true)}
              variant="contained"
              style={{ marginRight: "1rem" }}
            >
              Refresh
            </Button>
          </Box>
          {isShowing && <BingoGrid refresh={refresh} setRefresh={setRefresh} />}
        </Container>
      </div>
    </QueryClientProvider>
  );
}

export default App;
