import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typography from "@mui/material/Typography";

const jurisdictionsData = [
  {
    content:
      "We do not provide our services to individuals or companies in certain jurisdictions, including but not limited to Afghanistan, Canada, Congo (Kinshasa), Cuba, Cyprus, Hong Kong, Indonesia, Iran, Malaysia, North Korea, Singapore, Spain, Sudan, Syria, United Arab Emirates, United States, and Yemen.\n\nThe information and services on our website are not applicable and shall not be provided in any country or jurisdiction where such distribution would contravene local statutes and regulations.\n\nIf you are accessing this website from any of the aforementioned regions, please be aware that you are prohibited from using our services.\n\nWe strongly advise residents of these jurisdictions to consult legal counsel to confirm that accessing information or seeking services from us complies with their local laws.\n\nWe reserve the right to amend, vary, or discontinue our products and services at any time without prior notice.",
  },
  {
    title: "Governing Law",
    content:
      "You shall be governed by the laws of the Republic of Vanuatu, and you hereby acknowledge in complying with those laws.",
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
              Jurisdictions Where We Do NOT Offer Services
            </Typography>
            {jurisdictionsData.map((term, index) => (
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
