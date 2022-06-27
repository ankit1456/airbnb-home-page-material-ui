import { CssBaseline, Box, Container } from "@mui/material";
import Footer from "components/Footer";
import Header from "components/Header";
import LocationCards from "components/LocationCards";
import OptionsTab from "components/OptionsTab";

function App() {
  return (
  
      <>
        <CssBaseline>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            <Box>
              <Header />
              <OptionsTab />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                height: 100,
                overflowY: "scroll",
              }}
            >
              <Container
                maxWidth="xl"
                sx={{
                  mb: 3,
                }}
              >
                <LocationCards />
              </Container>
            </Box>

            <Box>
              <Footer/>
            </Box>
          </Box>
        </CssBaseline>
      </>
  );
}

export default App;
