import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typography from "@mui/material/Typography";

const termsData = [
  {
    content:
      "Please read these Terms and Conditions carefully before using this site. These terms outline the rules for using our website, www.autu.global, www.autu.finance, www.autuglobal.com, including other language sites (collectively referred to as 'Our Site').",
  },
  {
    title: "Who We Are and How to Contact Us",
    content:
      "Our Site is owned and operated by AUTU Securities ('we', 'us', 'our'). AUTU Securities International Inc. is the parent company of AUTU Securities. Information regarding the aforementioned entities can be found on Our Site. For further information on how to contact us, please ",
    link: { text: "click here", url: "#" },
  },
  {
    title: "By Using Our Site, You Accept These Terms",
    content:
      "By accessing Our Site, you confirm that you accept these Terms of Use and agree to comply with them. If you do not agree, you may not use Our Site or our services. \nBy continuing to use this site, you consent to receive all information provided on the site in the English language (including marketing and other material) unless you have chosen or agreed to receive information in additional languages. \nFurthermore, by continuing to use the site, you acknowledge and agree that the information provided via the site constitutes a 'durable medium' as defined under applicable laws.",
  },
  {
    title: "Additional Terms That May Apply to You",
    content:
      "The following terms also apply when using Our Site: \nOur Privacy Policy outlines how we process personal data collected from you or provided to us. By using Our Site, you consent to such processing and guarantee the accuracy of the data you provide.",
  },
  {
    title: "Changes to These Terms",
    content:
      "We reserve the right to amend these Terms from time to time. Please review these Terms each time you access Our Site to ensure you understand the terms applicable at that time.",
  },
  {
    title: "Changes to Our Site",
    content:
      "We may update and change Our Site periodically to reflect changes to our services or business priorities. The most up-to-date version of these Terms will always be available on Our Site.",
  },
  {
    title: "Suspension or Withdrawal of Our Site",
    content:
      "Our Site is provided free of charge. However, we do not guarantee uninterrupted availability of Our Site or its content. We may suspend, withdraw, or restrict access to Our Site or parts of it for operational or business reasons. Where possible, we will provide reasonable notice.",
  },
  {
    title: "Keeping Your Account Details Safe",
    content:
      "Our Site is provided free of charge. However, we do not guarantee uninterrupted availability of Our Site or its content. We may suspend, withdraw, or restrict access to Our Site or parts of it for operational or business reasons. Where possible, we will provide reasonable notice. Our Site is not intended for users in certain countries, including but not limited to the United States, the Islamic Republic of Iran, and Canada, or where its use would violate local laws or regulations. Visitors are responsible for ensuring compliance with local laws in their jurisdiction before accessing Our Site.",
  },
  {
    title: "Intellectual Property Rights",
    content:
      "All intellectual property rights on Our Site, including copyrights, trademarks, and database rights, are owned by us or our licensors. You may not modify, reproduce, or use any material from Our Site without our explicit permission. \nUnauthorized use of any part of the content may result in legal action.",
  },
  {
    title: "Information on This Site",
    content:
      "The content on Our Site is for general information purposes only and is not intended as advice. You should seek professional or specialist advice before acting based on any content. \nWe make reasonable efforts to keep the information accurate and up-to-date but do not guarantee its completeness or reliability.",
  },
  {
    title: "Linking to Our Site",
    content:
      "You may not create a link to Our Site in a way that suggests affiliation or endorsement by us unless expressly agreed upon. Additionally, Our Site must not be framed or linked to any unauthorized domain. \nTo request permission to link to or use content from Our Site, please contact us directly.",
  },
  {
    title: "Liability for Loss or Damage",
    content:
      "To the extent permitted by law, we disclaim all implied warranties and will not be liable for any loss or damage incurred from using Our Site or relying on its content. This includes, but is not limited to, losses arising from: \n1.Inability to use Our Site \n2.Reliance on any content displayed on Our Site.",
  },
  {
    title: "Viruses and Security",
    content:
      "We do not guarantee that Our Site will be free from bugs or viruses. You are responsible for ensuring your devices are properly protected when accessing Our Site. \nYou must not misuse Our Site by knowingly introducing malicious code or attempting unauthorized access to Our Site, its servers, or related systems. Any breach may result in criminal prosecution.",
  },
  {
    title: "Governing Law and Jurisdiction",
    content:
      "These Terms are governed by and construed in accordance with the governing law specified in the Client Agreement. Any disputes will be subject to the exclusive jurisdiction set forth therein.",
  },
  {
    title: "Amendments and Severability",
    content:
      "We reserve the right to update these Terms without prior notice. The latest version will always apply. \nIf any provision of these Terms is deemed unlawful or unenforceable, the remaining provisions will remain in full effect.",
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
              Website Terms and Conditions
            </Typography>
            {termsData.map((term, index) => (
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
