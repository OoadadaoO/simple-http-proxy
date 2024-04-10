# HTTP Proxy

## Configuration

To configure the HTTP Proxy, follow these steps:

1. Copy the `.env.example` file to `.env`:

   ```bash
   $ cp .env.example .env
   ```

2. Edit the `.env` file and set the following variables:
   - `PORT`: The port number to run the HTTP Proxy process.
   - `DOMAINS`: The domains you would like to proxy, separated by commas. For example: `www.google.com,github.com`.

## Run the Application

To run the HTTP Proxy, use the following commands:

- **Development Mode**:

  ```bash
  $ yarn dev
  ```

- **Production Mode**:
  ```bash
  $ yarn build && yarn start
  ```

These commands will build and start the proxy server in the respective modes.

## How to Use

To access the proxy, make a request in the following format: `http://localhost:{port}/{domain}{route}`.

For example, to access Github's personal homepage via the proxy:

```
http://localhost:3000/github.com/OoadadaoO
```

Please make sure to replace `{port}` with the port number you have configured and `{domain}` with the desired domain you want to proxy, also add `{route}` if needed.
