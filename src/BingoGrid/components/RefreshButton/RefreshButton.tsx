import { Button } from "@mui/material";
import { useQueryClient } from "react-query";
import { BINGO_APP_KEY } from "../../../api/Bingo/getBingoOptions";

export default function RefreshButton() {
  const newqueryClient = useQueryClient();
  return (
    <Button
      onClick={() => newqueryClient.invalidateQueries([BINGO_APP_KEY])}
      variant="contained"
      style={{ marginRight: "1rem" }}
    >
      Refresh
    </Button>
  );
}
