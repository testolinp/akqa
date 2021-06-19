import { BasketProvider } from "../core/context/basket";

const MyApp = ({ Component, pageProps }) => {
  return (
    <BasketProvider>
      <Component {...pageProps} />
    </BasketProvider>
  )
}

export default MyApp
