import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useThrottleFn } from 'ahooks';
import { saveWorkInfo } from '@/services';
import { useIntl } from "react-intl";

export default function CustomizedSteppers({ next }) {
  const [loading, setLoading] = useState(false);
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [industry, setIndustry] = useState('');
  const [otherIndustry, setOtherIndustry] = useState('');
  const intl = useIntl();

  const nextTxt = intl.formatMessage({ id: "imorove.step.next" });
  const situationTxt = intl.formatMessage({ id: "imorove.step.careerInfo.situation" });
  const onTheJobTxt = intl.formatMessage({ id: "imorove.step.careerInfo.onTheJob" });
  const freelanceTxt = intl.formatMessage({ id: "imorove.step.careerInfo.freelance" });
  const retireTxt = intl.formatMessage({ id: "imorove.step.careerInfo.retire" });
  const studentTxt = intl.formatMessage({ id: "imorove.step.careerInfo.student" });
  const noOccupationTxt = intl.formatMessage({ id: "imorove.step.careerInfo.noOccupation" });
  const industryTxt = intl.formatMessage({ id: "imorove.step.careerInfo.industry" });

  const accountingTxt = intl.formatMessage({ id: "imorove.step.careerInfo.accounting" });
  const administrationTxt = intl.formatMessage({ id: "imorove.step.careerInfo.administration" });
  const agricultureTxt = intl.formatMessage({ id: "imorove.step.careerInfo.agriculture" });
  const companyTxt = intl.formatMessage({ id: "imorove.step.careerInfo.company" });
  const mediumTxt = intl.formatMessage({ id: "imorove.step.careerInfo.medium" });
  const nationalDefenseTxt = intl.formatMessage({ id: "imorove.step.careerInfo.nationalDefense" });
  const educationTxt = intl.formatMessage({ id: "imorove.step.careerInfo.education" });
  const emergencyServicesTxt = intl.formatMessage({ id: "imorove.step.careerInfo.emergencyServices" });
  const engineeringTxt = intl.formatMessage({ id: "imorove.step.careerInfo.engineering" });
  const financialTxt = intl.formatMessage({ id: "imorove.step.careerInfo.financial" });
  const governmentalTxt = intl.formatMessage({ id: "imorove.step.careerInfo.governmental" });
  const lawTxt = intl.formatMessage({ id: "imorove.step.careerInfo.law" });
  const importsAndExportsTxt = intl.formatMessage({ id: "imorove.step.careerInfo.imports&exports" });
  const cateringTxt = intl.formatMessage({ id: "imorove.step.careerInfo.catering" });
  const manufactureTxt = intl.formatMessage({ id: "imorove.step.careerInfo.manufacture" });
  const adTxt = intl.formatMessage({ id: "imorove.step.careerInfo.industry" });
  const noGovernmentalTxt = intl.formatMessage({ id: "imorove.step.careerInfo.noGovernmental" });
  const charitableTxt = intl.formatMessage({ id: "imorove.step.careerInfo.charitable" });
  const pharmacyTxt = intl.formatMessage({ id: "imorove.step.careerInfo.pharmacy" });
  const preciousMetalTxt = intl.formatMessage({ id: "imorove.step.careerInfo.preciousMetal" });
  const propertyTxt = intl.formatMessage({ id: "imorove.step.careerInfo.property" });
  const retailTxt = intl.formatMessage({ id: "imorove.step.careerInfo.retail" });
  const socialTxt = intl.formatMessage({ id: "imorove.step.careerInfo.social" });
  const techTxt = intl.formatMessage({ id: "imorove.step.careerInfo.tech" });
  const telecomTxt = intl.formatMessage({ id: "imorove.step.careerInfo.telecom" });
  const transportTxt = intl.formatMessage({ id: "imorove.step.careerInfo.transport" });
  const otherTxt = intl.formatMessage({ id: "imorove.step.careerInfo.other" });

  
  const {
    run: handleNext,
  } = useThrottleFn(async () => {
    setLoading(true);
    const res = await saveWorkInfo({
      employmentStatus,
      industry,
      otherIndustry,
    });
    setLoading(false);

    next();
  });

  return (
    <>
      <Card className="mt-4 mx-auto max-w-sm" variant="outlined">
        <CardContent>
          <Stack direction="column" spacing={2} className="p-4">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{situationTxt}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={employmentStatus}
                label={situationTxt}
                onChange={e => setEmploymentStatus(e.target.value)}
              >
                <MenuItem value={'employ'}>{onTheJobTxt}</MenuItem>
                <MenuItem value={'self-employed'}>{freelanceTxt}</MenuItem>
                <MenuItem value={'retired'}>{retireTxt}</MenuItem>
                <MenuItem value={'student'}>{studentTxt}</MenuItem>
                <MenuItem value={'unemploy'}>{noOccupationTxt}</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{industryTxt}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={industry}
                label={industryTxt}
                onChange={e => setIndustry(e.target.value)}
              >
                <MenuItem value={accountingTxt}>{accountingTxt}</MenuItem>
                <MenuItem value={administrationTxt}>{administrationTxt}</MenuItem>
                <MenuItem value={agricultureTxt}>{agricultureTxt}</MenuItem>
                <MenuItem value={companyTxt}>{companyTxt}</MenuItem>
                <MenuItem value={mediumTxt}>{mediumTxt}</MenuItem>
                <MenuItem value={nationalDefenseTxt}>{nationalDefenseTxt}</MenuItem>
                <MenuItem value={educationTxt}>{educationTxt}</MenuItem>
                <MenuItem value={emergencyServicesTxt}>{emergencyServicesTxt}</MenuItem>
                <MenuItem value={engineeringTxt}>{engineeringTxt}</MenuItem>
                <MenuItem value={financialTxt}>{financialTxt}</MenuItem>
                <MenuItem value={governmentalTxt}>{governmentalTxt}</MenuItem>
                <MenuItem value={lawTxt}>{lawTxt}</MenuItem>
                <MenuItem value={importsAndExportsTxt}>{importsAndExportsTxt}</MenuItem>
                <MenuItem value={cateringTxt}>{cateringTxt}</MenuItem>
                <MenuItem value={manufactureTxt}>{manufactureTxt}</MenuItem>
                <MenuItem value={adTxt}>{adTxt}</MenuItem>
                <MenuItem value={noGovernmentalTxt}>{noGovernmentalTxt}</MenuItem>
                <MenuItem value={charitableTxt}>{charitableTxt}</MenuItem>
                <MenuItem value={pharmacyTxt}>{pharmacyTxt}</MenuItem>
                <MenuItem value={preciousMetalTxt}>{preciousMetalTxt}</MenuItem>
                <MenuItem value={propertyTxt}>{propertyTxt}</MenuItem>
                <MenuItem value={retailTxt}>{retailTxt}</MenuItem>
                <MenuItem value={socialTxt}>{socialTxt}</MenuItem>
                <MenuItem value={techTxt}>{techTxt}</MenuItem>
                <MenuItem value={telecomTxt}>{telecomTxt}</MenuItem>
                <MenuItem value={transportTxt}>{transportTxt}</MenuItem>
                <MenuItem value="0">{otherTxt}</MenuItem>
              </Select>
            </FormControl>
            {
              industry == '0' ? (
                <FormControl fullWidth>
                  <TextField id="outlined-basic" label={"*其他"} variant="outlined" onChange={e => setOtherIndustry(e.target.value)} />
                </FormControl>
              ) : null
            }

            <Button
              className='mt-4 bg-blue-900'
              sx={{ py: 1.5 }}
              variant="contained"
              disabled={!employmentStatus || (industry == '0' && !otherIndustry) || (industry != '0' && !industry)}
              onClick={handleNext}
            >
              {nextTxt}
            </Button>


          </Stack>
        </CardContent>
      </Card>
    </>
  );
}