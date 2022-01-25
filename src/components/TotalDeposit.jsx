import { useState } from "react";
import { Card } from "./Card"
import "./TotalDeposit.css"
import { AnchorEarn, CHAINS, NETWORKS } from "@anchor-protocol/anchor-earn";

const anchorEarn = new AnchorEarn({
  chain: CHAINS.TERRA,
  network: NETWORKS.BOMBAY_12,
  mnemonic: '...',
});

export const TotalDeposit = () => {
    const [deposit, setDeposit] = useState(0)

    return (
        <Card title="Total Deposit">
            <div className="depositDisplay">
                <div className="amount">{deposit}</div>
                <div className="currency">UST</div>
            </div>
            <div className="actions">
                <button className="deposit" onClick={() => setDeposit(deposit + 10)} >Deposit</button>
                <button className="withdraw" onClick={() => setDeposit(deposit - 10)} >Withdraw</button>
            </div>
        </Card>
    )
}