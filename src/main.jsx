// import React from "react";
// import ReactDOM from 'react-dom/client'
// import { Toaster } from 'react-hot-toast';
// import '@rainbow-me/rainbowkit/styles.css';
// import "./main.css"
// import {
//   darkTheme,
//   getDefaultWallets,
//   RainbowKitProvider,
//   connectorsForWallets,
// } from "@rainbow-me/rainbowkit";
// import {
//   argentWallet,
//   trustWallet,
//   ledgerWallet,
// } from '@rainbow-me/rainbowkit/wallets';
// import { configureChains, createConfig, WagmiConfig } from "wagmi";
// import {
//   polygonAmoy 
// } from "wagmi/chains";
// import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
// import Layout from "./Layout";
// import './i18n';

// // const { chains, publicClient } = configureChains(
// //   [polygonAmoy],
// //   [
// //     jsonRpcProvider({
// //       rpc: (chain) => {
// //         if (chain.id === polygonAmoy.id) {
// //           return { http: 'https://polygon-amoy.g.alchemy.com/v2/Un_Fiiih018JOkjdVh3As4MHdQVr0KJo' };
// //         } else {
// //           return { http: 'https://polygon-amoy.g.alchemy.com/v2/Un_Fiiih018JOkjdVh3As4MHdQVr0KJo' };
// //         }
// //       },
// //     }),
// //   ],
// // );


// const projectId = '7fb83121f24001fe287ad6e719130eab';

// const { wallets } = getDefaultWallets({
//   appName: 'RainbowKit',
//   projectId,
//   chains,
// });

// const connectors = connectorsForWallets([
//   ...wallets,
//   {
//     groupName: 'Other',
//     wallets: [
//       argentWallet({ projectId, chains }),
//       trustWallet({ projectId, chains }),
//       ledgerWallet({ projectId, chains }),
//     ],
//   },
// ]);

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
// });

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//    <WagmiConfig config={wagmiConfig}>
//       <RainbowKitProvider
//         modalSize="compact" //wide,compact
//         chains={chains}
//         theme={darkTheme({
//           accentColor: "rgba(255, 255, 255, 0.2)",
//           accentColorForeground: "white",
//           borderRadius: "medium",
//           fontStack: "system",
//           overlayBlur: "small",
//         })}
//       >
//         <Toaster
//           position="top-right"
//           reverseOrder={false}
//           gutter={8}
//           containerClassName=""
//           containerStyle={{}}
//           toastOptions={{
//             className: '',
//             duration: 5000,
//             style: {
//               background: '#333',
//               color: '#fff',
//             },
//           }}
//         />
//         <Layout />
//         </RainbowKitProvider>
//     </WagmiConfig>
//   </React.StrictMode>,
// )


import React from "react";
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import '@rainbow-me/rainbowkit/styles.css';
import "./main.css";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import Layout from "./Layout";
import './i18n';

// Define polygonAmoy chain manually
const polygonAmoy = {
  id: 80002, // Use the correct chain ID for Polygon
  name: 'Polygon Amoy',
  network: 'polygonAmoy',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
  rpcUrls: {
    default: 'https://rpc-amoy.polygon.technology',
  },
  blockExplorers: {
    default: { name: 'Polygonscan', url: 'https://amoy.polygonscan.com/' },
  },
};

const { chains, publicClient } = configureChains(
  [polygonAmoy],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id === polygonAmoy.id) {
          return { http: 'https://polygon-amoy.g.alchemy.com/v2/Un_Fiiih018JOkjdVh3As4MHdQVr0KJo' };
        } else {
          return { http: 'https://polygon-amoy.g.alchemy.com/v2/Un_Fiiih018JOkjdVh3As4MHdQVr0KJo' };
        }
      },
    }),
  ],
);

const projectId = '7fb83121f24001fe287ad6e719130eab';

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit',
  projectId,
  chains,
});

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        modalSize="compact" // wide,compact
        chains={chains}
        theme={darkTheme({
          accentColor: "rgba(255, 255, 255, 0.2)",
          accentColorForeground: "white",
          borderRadius: "medium",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 5000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
        <Layout />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
);
