import { Grid } from "@mui/material";
import {
  BINGON_OPTIONS,
  useGetBingoOptions,
} from "../api/Bingo/getBingoOptions";
import BingoItem from "./components/BingoItem/BingoItem";

type BINGO_GRID_PROPS = {
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  refresh: boolean;
};

export default function BingoGrid(props: BINGO_GRID_PROPS) {
  const { data } = useGetBingoOptions();

  if (!data) {
    return <div></div>;
  }

  const shuffledCards = shuffle(data.options);
  if (props.refresh) {
    shuffle(shuffledCards).every((x) => (x.active = false));
  }

  function shuffle(array: BINGON_OPTIONS[]) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent={"center"}
        >
          {shuffledCards.map((x) => (
            <Grid key={x.id} item xs={2.2}>
              <BingoItem item={x} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
