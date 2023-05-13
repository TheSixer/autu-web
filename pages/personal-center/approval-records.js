import { useState } from 'react';
import Layout from "@/components/PersonalCenterLayout";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TradingRecords from "@/components/TradingRecords";
import WithdrawRecords from "@/components/WithdrawRecords";
import { useIntl } from "react-intl";

const HomePage = () => {
  const [value, setValue] = useState('1');
  const intl = useIntl();

  const auditRecordsTxt = intl.formatMessage({ id: "audit.records" });
  const rechargeRecordsTxt = intl.formatMessage({ id: "audit.recharge.records" });
  const withdrawRecordsTxt = intl.formatMessage({ id: "audit.withdraw.records" });
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
  
      <div className="container p-8">
        <div className="mb-10">
          <h4 className="text-black font-semibold">{auditRecordsTxt}</h4>
        </div>

        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label={rechargeRecordsTxt} value="1" />
                <Tab label={withdrawRecordsTxt} value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <TradingRecords />
            </TabPanel>
            <TabPanel value="2">
              <WithdrawRecords />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
  
    </Layout>
  );
};

export default HomePage;
