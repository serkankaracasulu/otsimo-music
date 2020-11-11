import axios from "axios";
import * as React from "react";

export default function useMutation<TData, TVariables extends Object>(
  path: string,
  query: TVariables
) {
  const [data, setData] = React.useState<TData>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(true);
  React.useEffect(() => {
    axios({
      method: "post",
      url: path,
      data: query,
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
  });
  return { data, loading, error };
}
