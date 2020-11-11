import path from "path";
export default function getLisanceCode(lisanceUrl: string) {
  const parse = path.dirname(lisanceUrl).split("/");
  return parse[parse.length - 1];
}
