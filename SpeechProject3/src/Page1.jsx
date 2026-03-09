import { Button, Box, Typography, Chip } from "@mui/material";
import { Link } from "react-router-dom";

function Page1() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#000000",
        py: 6,
        px: 2,
      }}
    >
      <Box sx={{ maxWidth: 860, mx: "auto" }}>

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Chip
            label="SPEECH PROJECT 3"
            size="small"
            sx={{
              backgroundColor: "rgba(30, 80, 160, 0.35)",
              color: "#7eb8f7",
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: "0.65rem",
              mb: 2,
              border: "1px solid rgba(100, 160, 255, 0.3)",
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Georgia', serif",
              fontWeight: 700,
              color: "#c8e4ff",
              letterSpacing: "-0.5px",
            }}
          >
            Diversity & Inclusion
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Georgia', serif",
              fontWeight: 300,
              color: "#5a9bf5",
              letterSpacing: "-0.5px",
              fontStyle: "italic",
              mb: 1,
            }}
          >
            vs.
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Georgia', serif",
              fontWeight: 700,
              color: "#c8e4ff",
              letterSpacing: "-0.5px",
            }}
          >
            Stereotypes
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 3,
              backgroundColor: "#3a7bd5",
              mx: "auto",
              mt: 2,
              mb: 3,
              borderRadius: 2,
            }}
          />
          <Typography sx={{ color: "#7aaddd", maxWidth: 560, mx: "auto", lineHeight: 1.7 }}>
            This site explores the differences between diversity and inclusion
            versus stereotypes in the media: what they mean, how they are
            perceived, and examples of each.
          </Typography>
        </Box>

        {/* Author Info Card */}
        <Box sx={cardStyle}>
          <Typography
            sx={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: 3,
              color: "#5a9bf5",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            About This Project
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 3 }}>
            {[
              { label: "AUTHOR", value: import.meta.env.VITE_NAME },
              { label: "CREATED ON", value: "27/02/2026" },
              { label: "SOURCE", value: <a href="https://gitlab.com/sebasam-group/speech_project_3.git" style={{color: "#5a9bf5"}}>Gitlab Source Page</a>  },
            ].map((item) => (
              <Box
                key={item.label}
                sx={{
                  p: 2.5,
                  borderRadius: 2,
                  backgroundColor: "rgba(15, 50, 120, 0.3)",
                  border: "1px solid rgba(80, 140, 220, 0.18)",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: 2,
                    color: "#5a9bf5",
                    mb: 1,
                  }}
                >
                  {item.label}
                </Typography>
                <Typography sx={{ color: "#c8e4ff", fontSize: "0.9rem", fontWeight: 500 }}>
                  {item.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Navigation Cards */}
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, mb: 3 }}>

          {/* Stereotypes Card */}
          <Box
            sx={{
              ...cardStyle,
              mb: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <Box>
              <Chip
                label="NEGATIVE VALUE"
                size="small"
                sx={{
                  backgroundColor: "rgba(30, 80, 160, 0.35)",
                  color: "#7eb8f7",
                  fontWeight: 700,
                  letterSpacing: 2,
                  fontSize: "0.6rem",
                  mb: 2,
                  border: "1px solid rgba(100, 160, 255, 0.3)",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Georgia', serif",
                  fontWeight: 700,
                  color: "#c8e4ff",
                  fontSize: "1.3rem",
                  mb: 1.5,
                }}
              >
                Stereotypes
              </Typography>
              <Typography sx={{ color: "#7aaddd", fontSize: "0.875rem", lineHeight: 1.7 }}>
                Explore how oversimplified, generalized portrayals of groups
                in media reinforce bias and erase individual complexity.
              </Typography>
            </Box>
            <Button
              variant="outlined"
              component={Link}
              to="/Stereotypes"
              onClick={() => window.scrollTo(0, 0)}
              fullWidth
              sx={{
                borderColor: "#3a7bd5",
                color: "#7eb8f7",
                py: 1.2,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "rgba(30, 80, 160, 0.2)",
                  borderColor: "#5a9bf5",
                },
              }}
            >
              View Stereotypes →
            </Button>
          </Box>

          {/* Diversity & Inclusion Card */}
          <Box
            sx={{
              ...cardStyle,
              mb: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <Box>
              <Chip
                label="POSITIVE VALUE"
                size="small"
                sx={{
                  backgroundColor: "rgba(30, 80, 160, 0.35)",
                  color: "#7eb8f7",
                  fontWeight: 700,
                  letterSpacing: 2,
                  fontSize: "0.6rem",
                  mb: 2,
                  border: "1px solid rgba(100, 160, 255, 0.3)",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Georgia', serif",
                  fontWeight: 700,
                  color: "#c8e4ff",
                  fontSize: "1.3rem",
                  mb: 1.5,
                }}
              >
                Diversity & Inclusion
              </Typography>
              <Typography sx={{ color: "#7aaddd", fontSize: "0.875rem", lineHeight: 1.7 }}>
                Discover how inclusive media representation expands whose
                stories are told and fosters empathy across society.
              </Typography>
            </Box>
            <Button
              variant="outlined"
              component={Link}
              to="/DiversityAndInclusion"
              onClick={() => window.scrollTo(0, 0)}
              fullWidth
              sx={{
                borderColor: "#3a7bd5",
                color: "#7eb8f7",
                py: 1.2,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "rgba(30, 80, 160, 0.2)",
                  borderColor: "#5a9bf5",
                },
              }}
            >
              View Diversity & Inclusion →
            </Button>
          </Box>

        </Box>

      </Box>
    </Box>
  );
}

/* ── Styles ── */

const cardStyle = {
  p: { xs: 3, sm: 4 },
  mb: 3,
  borderRadius: 3,
  border: "1px solid rgba(80, 140, 220, 0.2)",
  backgroundColor: "rgba(10, 40, 100, 0.3)",
  backdropFilter: "blur(4px)",
};

export default Page1;