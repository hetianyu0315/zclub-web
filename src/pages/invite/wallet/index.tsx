import React, { useState } from 'react';
import WalletCtx from '@/components/walletCtx';
import Wallet from './wallet';

export default function IndexPage() {
    return <WalletCtx><Wallet/></WalletCtx>
}