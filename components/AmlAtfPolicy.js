import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typography from "@mui/material/Typography";

const amlCtfPolicyData = [
  {
    title: "Introduction",
    content:
      "Autu Securities International Inc. is firmly committed to maintaining the integrity of its operations by adhering to the AML & CTF Act and the requirements of the Vanuatu Financial Intelligence Unit (VFIU).\n\nThis policy establishes the framework for our Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) measures, ensuring our institution is not exploited for illicit purposes.\n\nOur primary objectives are to:\n\nUphold the highest ethical and professional standards.\nSafeguard our products and services from being misused for money laundering or terrorism financing.\nFoster a culture of compliance among our staff.",
  },
  {
    title: "Duty of Vigilance",
    content:
      "We recognize our duty under the AML & CTF Act to:\n\nImplement robust policies and procedures to prevent money laundering and terrorism financing.\nMonitor, detect, and respond to suspicious activities.\nReport any instances of potential misuse to the VFIU promptly.\n\nOur commitment to vigilance ensures the safety and legitimacy of our operations and contributes to global efforts against financial crimes.",
  },
  {
    title: "Principles",
    content:
      "\nOpposition to Crimes: We strongly oppose money laundering and terrorism financing, refusing to tolerate the misuse of our services for such activities.\n\nCommitment to Compliance: We strictly adhere to Vanuatu’s AML & CTF regulations.\n\nLegitimate Transactions Only: Our products and services are available exclusively for legitimate purposes to individuals or entities whose identities have been verified.\n\nRisk Assessment: We avoid relationships with high-risk individuals or entities based on reasonable assessments.\n\nStaff Support: We provide guidance to staff dealing with transactions involving personal connections.\n\nEquality: Owners, management, and staff are treated the same as any other applicant.\n\nSuspicious Activity Reporting: We promptly report any suspicious activities to the VFIU.\n\nStaff Training: Comprehensive AML & CTF training is provided to ensure all staff understand their responsibilities.\n\nMonitoring and Evaluation: We continuously monitor customer transactions in proportion to their assessed risk levels.\n\nRegistration with FIU: We comply with Section 9 of the AML & CTF Act by registering with the FIU and updating them on material changes in our business.\n\nCompliance Officer Reporting: We notify the FIU of any changes to our Compliance Officer as required under Section 34 of the AML & CTF Act.\n\nScreening and Removal: Owners, management, and staff undergo fit-and-proper screening and may be disqualified under Sections 48 and 49 of the AML & CTF Act.",
  },
  {
    title: "Our AML & CTF Program",
    content:
      "Our AML & CTF Program encompasses:\n\nPolicies and procedures to verify customer identities.\n\nOngoing transaction monitoring for unusual activities.\n\nIdentification of events requiring additional actions.\n\nReporting of suspicious activities and compliance with VFIU requirements.\n\nMaintenance of accurate records of all transactions and actions taken.\n\nThese controls are integral to our operations and embedded into our product features to ensure effective compliance.",
  },
  {
    title: "Disciplinary Action and Dismissal",
    content:
      "Staff Accountability\n\nStaff members who fail to adhere to AML & CTF policies will face disciplinary actions, including dismissal. Any involvement in facilitating money laundering or terrorism financing will result in immediate dismissal and reporting to the VFIU and law enforcement for prosecution.\n\nEqual Enforcement\n\nAll procedures in this manual apply equally, regardless of personal relationships or familiarity with involved parties. Transactions involving acquaintances, owners, or other connections must adhere strictly to these procedures.\n\nCompliance Support\n\nStaff encountering difficulties in following these procedures should consult the Compliance Officer for guidance and support.",
  },
  {
    title: "Conclusion",
    content:
      "Autu Securities International Inc. reaffirms its commitment to combating money laundering and terrorism financing. By adhering to this policy, we ensure the integrity of our operations, protect our customers, and contribute to global financial security.",
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
              style={{ whiteSpace: "pre-wrap" }}
            >
              {`ANTI-MONEY LAUNDERING\nAND COUNTER-TERRORISM FINANCING POLICY\nOF AUTU SECURITIES INTERNATIONAL INC.`}
            </Typography>
            {amlCtfPolicyData.map((term, index) => (
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
