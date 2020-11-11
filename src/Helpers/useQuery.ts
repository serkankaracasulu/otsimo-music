import axios from "axios";
import * as querystring from "querystring";
import { ParsedUrlQueryInput } from "querystring";
import * as React from "react";

export default function useQuery<
  TData,
  TVariables extends ParsedUrlQueryInput | string = never
>(path: string, query?: TVariables, callBack?: (data: TData) => void) {
  const [data, setData] = React.useState<TData>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(true);
  React.useEffect(() => {
    let queryString = "";
    if (typeof query != "string") {
      queryString = "?" + querystring.stringify(query as ParsedUrlQueryInput);
    } else {
      queryString = "/" + query;
    }
    const route = `${path}${queryString}`;
    axios({
      method: "get",
      url: route,
    })
      .then(({ data }) => {
        setLoading(false);
        setError(false);
        if (callBack) {
          callBack(data);
        }
        setData(data);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
    // eslint-disable-next-line
  }, []);
  return { data, loading, error };
}
