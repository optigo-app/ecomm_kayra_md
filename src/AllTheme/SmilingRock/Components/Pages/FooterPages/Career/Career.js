import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton, Collapse, Button, Divider, CircularProgress } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { motion } from "framer-motion";
import Footer from "../../Home/Footer/Footer";

const gridCols = { xs: "1fr 36px", md: "2.2fr 1.4fr 1fr 36px" };
const label = { fontSize: 12, letterSpacing: 1.5, color: "text.secondary", textTransform: "uppercase", fontWeight: 500 };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5 },
});

const Points = ({ items }) => (
  <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexDirection: "column", gap: 1.25 }}>
    {items.map((p, i) => (
      <Box component="li" key={i} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
        <CheckIcon sx={{ fontSize: 18, mt: "3px", color: "#111", flexShrink: 0 }} />
        <Typography sx={{ fontSize: 15, lineHeight: 1.65, color: "#333" }}>{p}</Typography>
      </Box>
    ))}
  </Box>
);

const Block = ({ title, children }) => (
  <Box sx={{ mb: 5 }}>
    <Typography sx={{ fontSize: 18, fontWeight: 600, mb: 2 }}>{title}</Typography>
    {children}
  </Box>
);

const Meta = ({ k, v }) => (
  <Box sx={{ py: 1.75, borderBottom: "1px solid", borderColor: "divider" }}>
    <Typography sx={{ ...label, fontSize: 11 }}>{k}</Typography>
    <Typography sx={{ mt: 0.5, fontSize: 15 }}>{v}</Typography>
  </Box>
);

const JobRow = ({ job, open, onToggle, index }) => (
  <motion.div {...fadeUp(index * 0.08)}>
    <Divider />
    <Box
      onClick={onToggle}
      sx={{
        display: "grid",
        gridTemplateColumns: gridCols,
        alignItems: "center",
        py: 3,
        px: { xs: 1, md: 2 },
        cursor: "pointer",
        transition: "background .3s",
        "&:hover": { bgcolor: "#fafafa" },
        "&:hover .career-arrow": { bgcolor: "#111" },
      }}
    >
      <Box>
        <Typography sx={{ fontSize: { xs: 18, md: 20 }, fontWeight: 500 }}>{job.position}</Typography>
        <Typography sx={{ display: { xs: "block", md: "none" }, mt: 0.5, fontSize: 13, color: "text.secondary" }}>
          {job.location} · {job.type}
        </Typography>
      </Box>
      <Typography sx={{ display: { xs: "none", md: "block" }, fontSize: 16 }}>{job.location}</Typography>
      <Typography sx={{ display: { xs: "none", md: "block" }, fontSize: 16 }}>{job.type}</Typography>
      <IconButton
        className="career-arrow"
        size="small"
        aria-label={open ? "Collapse" : "Expand"}
        sx={{
          width: 36,
          height: 36,
          minWidth: 36,
          p: 0,
          justifySelf: "end",
          alignSelf: "center",
          borderRadius: "50%",
          bgcolor: open ? "#111" : "#9e9e9e",
          color: "#fff",
          transition: "all .3s",
          "&:hover": { bgcolor: "#111" },
        }}
      >
        {open ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
      </IconButton>
    </Box>

    <Collapse in={open} timeout={500} unmountOnExit>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "300px 1fr" },
          gap: { xs: 4, md: 8 },
          px: { xs: 1, md: 2 },
          pt: 2,
          pb: { xs: 6, md: 8 },
        }}
      >
        <Box sx={{ alignSelf: "start", position: { md: "sticky" }, top: 24 }}>
          <Meta k="Job reference" v={job.id} />
          <Meta k="Location" v={job.location} />
          <Meta k="Hours" v={job.hours} />
          <Meta k="Job type" v={job.jobType} />
          <Meta k="Opening date" v={job.opening} />
          <Meta k="Closing date" v={job.closing} />
        </Box>

        <Box>
          {job.summary && (
            <Typography sx={{ fontSize: 17, lineHeight: 1.7, mb: 5, color: "#222" }}>{job.summary}</Typography>
          )}

          <Block title="Duties">
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
              {job.duties.map((d, i) => (
                <Box key={i}>
                  <Typography sx={{ ...label, mb: 1.5 }}>{d.title}</Typography>
                  <Points items={d.points} />
                </Box>
              ))}
            </Box>
          </Block>

          <Block title="Requirements">
            <Points items={job.requirements} />
          </Block>

          <Box sx={{ p: { xs: 2.5, md: 4 }, bgcolor: "#f7f7f7", borderRadius: 2 }}>
            <Typography sx={{ fontSize: 18, fontWeight: 600, mb: 2 }}>How to apply</Typography>
            <Points
              items={[
                <>Email your resume to <b>{job.applyEmail}</b></>,
                <>Or mail to {job.mailAddress}</>,
                <>Mention the job reference number <b>{job.id}</b></>,
              ]}
            />
            <Button
              variant="contained"
              disableElevation
              startIcon={<EmailOutlinedIcon />}
              href={`mailto:${job.applyEmail}?subject=Job Reference ${job.id} - ${job.position}`}
              sx={{
                mt: 3.5,
                bgcolor: "#111",
                borderRadius: 50,
                px: 4.5,
                py: 1.4,
                textTransform: "none",
                fontSize: 15,
                transition: "all .3s",
                "&:hover": { bgcolor: "#333", transform: "translateY(-2px)", boxShadow: "0 8px 20px rgba(0,0,0,.2)" },
              }}
            >
              Apply Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Collapse>
  </motion.div>
);

const Career = () => {
  const [data, setData] = useState(null);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL || ""}/careers.json`)
      .then((r) => r.json())
      .then((d) => {
        setData(d);
        setOpenId(d.jobs?.[0]?.id ?? null);
      })
      .catch(() => setData({ jobs: [] }));
  }, []);

  if (!data)
    return (
      <Box sx={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
        <CircularProgress size={32} sx={{ color: "#111" }} />
      </Box>
    );

  return (
    <>
      <Box sx={{ bgcolor: "#fff" }}>
        <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2.5, md: 6 }, pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 9 } }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Typography component="h1" sx={{ fontSize: { xs: 52, md: 110 }, lineHeight: 1, fontWeight: 400, letterSpacing: -3 }}>
              Career
            </Typography>
          </motion.div>
          <Typography sx={{ mt: 3.5, maxWidth: 440, fontSize: { xs: 14, md: 16 }, color: "text.secondary", lineHeight: 1.7 }}>
            {data.tagline}
          </Typography>
        </Box>

        <Divider />

        <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2.5, md: 6 }, pt: { xs: 5, md: 7 }, pb: { xs: 8, md: 12 } }}>
          <Box sx={{ display: "grid", gridTemplateColumns: gridCols, px: { xs: 1, md: 2 }, mb: 2 }}>
            <Typography sx={label}>Position</Typography>
            <Typography sx={{ ...label, display: { xs: "none", md: "block" } }}>Location</Typography>
            <Typography sx={{ ...label, display: { xs: "none", md: "block" } }}>Type</Typography>
            <span />
          </Box>
          {data.jobs.map((job, i) => (
            <JobRow
              key={job.id}
              job={job}
              index={i}
              open={openId === job.id}
              onToggle={() => setOpenId(openId === job.id ? null : job.id)}
            />
          ))}
          <Divider />
          {data.jobs.length === 0 && (
            <Typography sx={{ py: 6, textAlign: "center", color: "text.secondary" }}>
              No open positions right now. Please check back soon.
            </Typography>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Career;
