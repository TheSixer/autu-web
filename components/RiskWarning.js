import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typography from "@mui/material/Typography";

const riskWarningData = [
  {
    content:
      "Contracts for Difference (CFDs) are complex financial instruments and come with a high risk of losing money rapidly due to leverage.72% of retail investor accounts lose money when trading CFDs, according to industry statistics.You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.",
  },
  {
    title: "General Risks",
    content:
      "Securities, futures, CFDs, and other financial products involve significant risks due to the fluctuations in the value and prices of their underlying financial instruments.Market conditions can be highly volatile and unpredictable, potentially leading to large losses that may exceed your initial investment in a very short period of time.",
  },
  {
    title: "No Guarantee of Future Performance",
    content:
      "Past performance of any investment product is not a reliable indicator of future performance.Historical data cannot be relied upon to predict future outcomes, and you should not base your investment decisions solely on past results.",
  },
  {
    title: "Understanding Product Risks",
    content:
      "Before trading CFDs or engaging in transactions involving any financial instruments, it is crucial to ensure that you fully understand the associated risks and mechanics of these products.This includes, but is not limited to, risks associated with leverage, margin calls, and liquidity issues.",
  },
  {
    title: "Professional Advice",
    content:
      "If you do not fully understand the risks or the functioning of the financial instruments offered, you should seek independent professional advice.Investing in financial products is not suitable for everyone, and you must carefully assess your financial situation, experience, and objectives.",
  },
  {
    title: "Compliance Documents",
    content:
      "Please review all compliance documents available on our website before making any investment decisions.These documents provide important details regarding our terms and conditions, trading practices, and risk disclosures.",
  },
  {
    title: "Leverage and Rapid Losses",
    content:
      "Trading CFDs involves leverage, which can amplify both gains and losses.While leverage allows you to gain exposure to larger positions than your initial capital, it also increases the risk of losing your money rapidly.Be aware that adverse market movements can result in the liquidation of your positions, which could lead to substantial financial losses.",
  },
  {
    title: "Market Conditions and External Factors",
    content:
      "The prices of financial instruments are influenced by numerous factors, including economic data, geopolitical events, and market sentiment.Such factors can cause rapid and adverse price movements, which may result in substantial losses or illiquid positions.",
  },
  {
    title: "Final Considerations",
    content:
      "Trading financial instruments like CFDs carries significant risks and may not be suitable for all investors.Ensure you:\n1.Have a thorough understanding of the product.\n2.Are aware of the high-risk nature of trading leveraged products.\n3.Can afford potential losses without compromising your financial stability.\nThis risk warning is provided for informational purposes and does not constitute financial advice.By trading with us, you acknowledge that you have read, understood, and accepted the risks outlined herein.",
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
              Risk Warning
            </Typography>
            {riskWarningData.map((term, index) => (
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
