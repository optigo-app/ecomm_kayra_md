import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { storImagePath } from "../../../../../utils/Glob_Functions/GlobalFunction";
import Footer from "../Home/Footer/Footer";
import './style.scss';

const ExhibitionsPage = () => {
  const [exhibitions, setExhibitions] = useState([]);
  useEffect(() => {
    fetch(storImagePath() + "/exhibitions/ExhibitionData.json")
      .then((res) => res.json())
      .then((data) => {
        setExhibitions(data);
      });
  }, []);

  const ImageBanner = storImagePath() + "/exhibitions/1.jpg";
  return (
    <div className='smr_theteam_mainDiv'>
      <div className='daimondsEverytheteam'>
        <Box sx={{ width: "100%", pb: 8 }}>
          {/* Hero Image Section */}
          <Box
            sx={{
              width: "100%",
              height: { xs: "200px", sm: "300px", md: "450px" },
              backgroundImage: "url(" + ImageBanner + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mb: 5,
            }}
          />

          <Container maxWidth="lg">
            {/* Page Title */}
            <Typography variant="h3" component="h1" sx={{ fontWeight: 400, mb: 4, color: "#333" }}>
              Exhibitions
            </Typography>

            {/* Introductory Text */}
            <Box sx={{ color: "#555", mb: 6, "& p": { mb: 2, lineHeight: 1.7 } }}>
              <Typography variant="body1">
                Since 2003, we have participated in leading global jewellery exhibitions, showcasing our collections to wholesale and retail customers across the USA, Europe, the Middle East, and Asia under our brand.
              </Typography>

              <Typography variant="body1">
                Our exhibition network includes retailers, wholesalers, and traders, giving us strong insight into global market trends and evolving customer preferences.
              </Typography>

              <Typography variant="body1">
                We take part in over 20 international exhibitions each year, including major events like the Hong Kong International Jewellery Show, JCK Las Vegas, and Jewellery Arabia.
              </Typography>
              <Typography variant="body1" sx={{ mt: 3 }}>
                Enquiry Email:{" "}
                <Link href="mailto:sales@kayracreation.com" sx={{ color: "inherit", textDecoration: "underline" }}>
                  sales@kayracreation.com
                </Link>
              </Typography>
            </Box>

            {exhibitions?.length > 0 &&
              exhibitions?.map((section, index) => (
                <Box key={index} sx={{ mb: 6 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#333" }}>
                    {section.month}
                  </Typography>

                  <TableContainer
                    component={Paper}
                    elevation={0}
                    sx={{
                      border: "1px solid #e0e0e0",
                      borderRadius: 0,
                      // Ensures table scrolls on mobile instead of shrinking text
                      overflowX: "auto",
                      // 👇 Thin scrollbar
                      "&::-webkit-scrollbar": {
                        height: "6px",
                        width: "6px",
                      },
                      "&::-webkit-scrollbar-track": {
                        background: "#f1f1f1",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: "#c1c1c1",
                        borderRadius: "10px",
                      },
                      "&::-webkit-scrollbar-thumb:hover": {
                        background: "#999",
                      },

                      // Firefox
                      scrollbarWidth: "thin",
                      scrollbarColor: "#c1c1c1 #f1f1f1",
                    }}
                  >
                    <Table
                      sx={{
                        minWidth: 650,
                        // Applies a grid-like border to all cells to match the design
                        "& td, & th": { borderRight: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0" },
                        "& td:last-child, & th:last-child": { borderRight: 0 },
                        "& tr:last-child td": { borderBottom: 0 },
                      }}
                      aria-label="exhibition table"
                    >
                      <TableHead sx={{ backgroundColor: "#fcfcfc" }}>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold", width: "15%" }}>Date</TableCell>
                          <TableCell sx={{ fontWeight: "bold", width: "40%" }}>Show</TableCell>
                          <TableCell sx={{ fontWeight: "bold", width: "10%" }}>Booth No.</TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>City</TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>Country</TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>Venue</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {section.events.map((event, eventIdx) => (
                          <TableRow key={eventIdx}>
                            {/* Date */}
                            <TableCell sx={{ color: "#555" }}>
                              {event.status === "Postponed" ? (
                                <Box sx={{ display: "flex", alignItems: "center", fontWeight: "bold", color: "#333" }}>
                                  <WarningAmberIcon sx={{ color: "#ed6c02", mr: 1, fontSize: 20 }} />
                                  Postponed
                                </Box>
                              ) : (
                                event.date
                              )}
                            </TableCell>

                            {/* Exhibition */}
                            <TableCell sx={{ color: "#555" }}>{event.name}</TableCell>

                            {/* Booth */}
                            <TableCell sx={{ color: "#555" }}>{event.booth}</TableCell>


                            {/* City */}
                            <TableCell sx={{ color: "#555" }}>{event.city}</TableCell>

                            {/* Country */}
                            <TableCell sx={{ color: "#555" }}>{event.country}</TableCell>

                            {/* Venue */}
                            <TableCell sx={{ color: "#555" }}>{event.venue}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              ))}
          </Container>
        </Box>
        <Footer />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: '30px' }}>
        <p style={{ margin: '0px', fontWeight: 500, width: '100px', color: 'white', cursor: 'pointer' }} onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })}>BACK TO TOP</p>
      </div>
    </div>
  );
};

export default ExhibitionsPage;
