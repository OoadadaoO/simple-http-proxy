import { createProxyMiddleware } from "http-proxy-middleware";

export const proxy = (domain: string) =>
  createProxyMiddleware({
    target: `https://${domain}`,
    changeOrigin: true,
    pathRewrite: {
      [`^/${domain}`]: "",
    },
  });
