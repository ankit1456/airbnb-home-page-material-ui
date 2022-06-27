import { Box, Tab, Button, Container } from "@mui/material";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import { FaFilter } from "react-icons/fa";
import { locationsTab } from "data/mock-data";
import { useState } from "react";

const OptionsTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          px: { xs: 0, md: 2 },
          ml: 2,
          mb: 2,
          alignItems: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          {locationsTab.map((tab) => {
            return <Tab key={tab.id} icon={tab.icon} label={tab.label} />;
          })}
        </Tabs>

        <Button
          sx={{
            display: { xs: 'none', md: 'block' },
            border: '1px solid #ddd',
            minWidth: 100,
            borderRadius: 2,
            textTransform: 'capitalize',
            py: 1,
            color: 'theme.palette.text.primary',
          }}
        >
          <FaFilter 
          style={{marginBottom:"-2px",marginRight:3}}
           /> Filters
        </Button>
      </Box>
    </Container>
  );
};

export default OptionsTab;
