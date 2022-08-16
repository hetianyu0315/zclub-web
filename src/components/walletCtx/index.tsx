import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider}  from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    Coin98WalletAdapter,
} from '@solana/wallet-adapter-wallets';
import React, { FC, ReactNode, useMemo, useContext, useState } from 'react';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';

const Ctx: FC<{ children: ReactNode}> = (props) => {
    return (
        <Context>
            {props.children}
        </Context>
    );
};

const Context: FC<{ children: ReactNode }> = ({ children }) => {
    const [userInfo] = useState(JSON.parse(localStorage.getItem('userInfo')||'{}'))
    const [isAuto] = useState(userInfo.isLogin=='true');
    //const isAuto = false
    console.log('isAuto',isAuto)
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Mainnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = 'https://api.mainnet-beta.solana.com'  // useMemo(() => clusterApiUrl(network), [network]); //'http://localhost:8899' 

    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded.
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter(),
            new Coin98WalletAdapter(),
            new SlopeWalletAdapter(),
        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect={false}>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};


export default Ctx;
