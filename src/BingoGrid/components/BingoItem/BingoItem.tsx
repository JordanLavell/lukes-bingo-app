import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { BINGON_OPTIONS } from "~/api/Bingo/getBingoOptions";
import classes from "./BingoItem.module.scss";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type BINGO_ITEM_PROPS = {
  item: BINGON_OPTIONS;
};

export default function BingoItem(props: BINGO_ITEM_PROPS) {
  const [complete, setComplete] = useState(false);
  const { item } = props;
  useEffect(() => {
    setComplete(false);
  }, [props]);

  return (
    <Item
      className={
        !complete
          ? `${classes.BingoGrid}`
          : `${classes.CrossedOFFBingo} ${classes.strike}`
      }
      onClick={(e) => {
        setComplete(!complete);
      }}
    >
      {item.value}
    </Item>
  );
}
