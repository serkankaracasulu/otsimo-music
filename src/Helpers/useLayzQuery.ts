import axios from "axios";
import * as querystring from "querystring";
import * as React from "react";

export default function useLayzQuery<
  TData,
  TVariables extends querystring.ParsedUrlQueryInput
>(
  path: string
): [
  (query: TVariables) => void,
  { data: TData | undefined; loading: boolean; error: boolean }
] {
  const [data, setData] = React.useState<TData>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(true);
  function fetch(query: TVariables) {
    const queryString = querystring.stringify(query);
    const route = `${path}?${queryString}`;
    axios({
      method: "get",
      url: route,
    })
      .then(({ data }) => {
        setLoading(false);
        setError(false);
        setData(data);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }

  return [fetch, { data, loading, error }];
}
