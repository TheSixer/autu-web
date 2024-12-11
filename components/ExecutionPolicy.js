import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typography from "@mui/material/Typography";

const executionPolicyData = [
  {
    content:
      "This document outlines the approach taken by Autu Securities for executing orders on behalf of its clients.",
  },
  {
    title: "Definitions and Interpretation",
    content:
      "Buy Limit: An order to purchase securities at a price lower than the current market price, anticipating a subsequent price increase.\n\nBuy Stop: An order to purchase securities at a price higher than the current market price, anticipating further price increases.\n\nClient Agreement: The agreement entered into between Autu Securities and the client.\n\nMarket Order: An order to buy or sell securities at the current quoted price immediately.\n\nMargin Level: Calculated as (Equity / Margin) × 100%.\n\nPending Order: An order to execute a trade at a specific price, including Buy Limit, Buy Stop, Sell Limit, Sell Stop, Take Profit, and Stop Loss.\n\nSell Limit: An order to sell securities at a price higher than the current market price, anticipating a subsequent price decrease.\n\nSell Stop: An order to sell securities at a price lower than the current market price, anticipating further price decreases.\n\nStop Loss: An order to minimize losses by automatically closing a position if the price moves in an unfavorable direction.\n\nStop Out: Occurs when the Margin Level falls below a specified threshold, triggering automatic closure of positions.\n\nTake Profit: An order to close a position and secure profits when the price reaches a specified level.\n\nTerms not explicitly defined here shall have the meanings described in the Client Agreement.",
  },
  {
    title: "Transaction Terms and Conditions",
    content:
      "The client acknowledges that leverage for certain instruments, such as futures, may be adjusted when markets close/according to market conditions.\n\nBuy Limit, Sell Limit, and Take Profit orders for currency pairs and CFDs are executed at the client’s specified price or the next available market price.\n\nBuy Stop, Sell Stop, and Stop Loss orders for currency pairs and CFDs are executed at the client’s specified price or the next available market price, subject to the following:\n\nIf a price gap occurs during position opening or closing and the order price falls within the gap, the order will execute at the first available market price after the gap.\n\nCertain pending orders may only be placed 50 points above or below the current market price for specific account types.\n\nAutu Securities reserves the right to refuse execution of orders in cases of transmission errors, delays, technical issues, or illegal interventions resulting in erroneous pricing or quotes.\n\nOrders cannot be amended or canceled once the specified price is reached and executed.\n\nWhen Stop Out occurs, open positions are closed automatically without prior notice. Clients remain responsible for any outstanding balances after such closures.",
  },
  {
    title: "Execution Venue",
    content:
      "Autu Securities acts as a principal and not as an agent in executing client orders. Orders will be transmitted to third-party liquidity providers, but Autu Securities remains the sole counterparty.\n\nClients acknowledge that:\n\nTransactions are not conducted on a recognized exchange.\n\nTransactions are over-the-counter (OTC).\n\nOTC transactions may carry additional risks, including counterparty risk.",
  },
  {
    title: "Prohibition on Bonus-Hunting",
    content:
      "Autu Securities prohibits actions by clients aimed solely at obtaining bonuses or causing financial harm to the company.\n\nThe company reserves the right to:\n\nWithhold client funds.\n\nWithhold or cancel bonuses.\n\nImpose a penalty of 5% on deposits for suspicious activities.\n\nBonus-hunting activities include:\n\nSystematically closing positions with minimal profits (e.g., under 10 points) while holding non-turnover bonuses.\n\nOpening opposing positions solely to exploit bonus schemes.",
  },
  {
    title: "Amendments",
    content:
      "Autu Securities reserves the right to amend or update this policy at any time without prior notice. Amendments become effective upon publication on the company’s website. Clients are advised to review the policy regularly.",
  },
];

const TermsPage = () => {
  return (
    <section className="py-40">
      <Container>
        <Row className="justify-content-md-center">
          <Col sm="10">
            <Typography
              sx={{ mb: 4 }}
              variant="h4"
              align="center"
              color="textPrimary"
            >
              Execution Polic
            </Typography>
            {executionPolicyData.map((term, index) => (
              <div key={index}>
                {term.title && (
                  <Typography
                    sx={{ mb: 4 }}
                    variant="h6"
                    color="textPrimary"
                    gutterBottom
                  >
                    {term.title}
                  </Typography>
                )}
                <Typography
                  sx={{ mb: 4 }}
                  variant="subtitle1"
                  color="textPrimary"
                  style={{ whiteSpace: "pre-wrap" }}
                  gutterBottom
                >
                  {term.content}
                  {term.link && (
                    <a
                      href={term.link.url}
                      className="text-blue-500"
                      aria-label={term.link.text}
                    >
                      {term.link.text}
                    </a>
                  )}
                </Typography>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TermsPage;
