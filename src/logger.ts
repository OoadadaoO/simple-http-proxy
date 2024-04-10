import morgan from "morgan";

morgan.token("colorStatus", (req, res) => {
  // get the status code if response written
  const status = res.headersSent ? res.statusCode : 0;

  // get status color
  const color =
    status >= 500
      ? 31 // red
      : status >= 400
      ? 33 // yellow
      : status >= 300
      ? 36 // cyan
      : status >= 200
      ? 32 // green
      : 0; // no color

  return `\x1b[${color}m${status}\x1b[0m`;
});
morgan.token("colorMethod", (req) => {
  return `\x1b[33m${req.method}\x1b[0m`;
});
morgan.token("colorUrl", (req) => {
  return `\x1b[36m${req.url}\x1b[0m`;
});

morgan.format(
  "custom",
  ':remote-addr - :remote-user [:date[clf]] :colorMethod :colorUrl HTTP/:http-version :colorStatus ":response-time ms" ":user-agent"'
  // ':remote-addr - :remote-user [:date[clf]] :colorMethod :colorUrl HTTP/:http-version :colorStatus ":response-time ms" ":res[content-length]" ":referrer" ":user-agent"'
);

export const morganLogger = morgan("custom");
