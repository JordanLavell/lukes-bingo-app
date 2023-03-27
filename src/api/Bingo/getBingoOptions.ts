
import { useQuery } from "react-query";
import * as JSON from "../../BingoGrid/bingOptions.json";

export const BINGO_APP_KEY = "BINGO_APP_KEY"

export type BINGO_APP_TYPE = {
	options: BINGON_OPTIONS[];	
}

export type BINGON_OPTIONS = {
	id: number;
	value: string;
	active: boolean;
}

export const getBingoOptions = async (
  ): Promise<BINGO_APP_TYPE> => {
	const data = JSON;
	return data;
  };

  export const useGetBingoOptions = () => {
	return useQuery(
		[BINGO_APP_KEY],
		() => getBingoOptions(),
		{
			refetchOnWindowFocus:false 
		}
	)
  }