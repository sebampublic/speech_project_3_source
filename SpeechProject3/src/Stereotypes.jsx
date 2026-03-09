import { Box, Typography, Button, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { Image } from "mui-image";

function Stereotypes() {
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
            label="NEGATIVE VALUE"
            size="small"
            sx={{
              backgroundColor: "rgba(30, 80, 160, 0.35)",
              color: "#7aaddd",
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
            A deeply ingrained form of media bias that reduces complex individuals
            to oversimplified, often harmful generalizations.
          </Typography>
        </Box>

        {/* Definition Card */}
        <Box sx={cardStyle}>
          <SectionLabel text="Definition" />
          <Typography variant="h6" sx={cardHeading}>
            What Are Stereotypes?
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, mt: 2 }}>
            <Box sx={infoBox}>
              <Typography sx={infoLabel}>DENOTATION</Typography>
              <Typography sx={infoText}>
                A fixed, generalized belief or image applied to every member of
                a group, regardless of individual differences. The literal meaning
                is a "standardized mental picture."
              </Typography>
            </Box>
            <Box sx={infoBox}>
              <Typography sx={infoLabel}>CONNOTATION IN MASS MEDIA</Typography>
              <Typography sx={infoText}>
                In media, stereotypes carry a negative implication: they flatten
                real people into convenient, often demeaning caricatures used to
                entertain or sell products without regard for the harm caused.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Connotation Card */}
        <Box sx={cardStyle}>
          <SectionLabel text="Connotation" />
          <Typography variant="h6" sx={cardHeading}>
            How Stereotypes Function in Media
          </Typography>

          <Box component="ol" sx={{ mt: 2, pl: 3, color: "#7aaddd" }}>
            {[
              "Assuming traits about a person without direct interaction",
              "Treating groups unequally based on perceived characteristics",
              "Encouraging and normalizing biased, prejudiced thinking",
              "Oversimplifying individuals by erasing their complexity",
              "Reinforcing systemic inequalities through repeated representation",
            ].map((item, i) => (
              <Box
                component="li"
                key={i}
                sx={{
                  mb: 1.5,
                  lineHeight: 1.7,
                  "&::marker": { color: "#3a7bd5", fontWeight: 700 },
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Examples Card */}
        <Box sx={cardStyle}>
          <SectionLabel text="Examples" />
          <Typography variant="h6" sx={cardHeading}>
            Stereotypes in Mass Media
          </Typography>
          <Typography sx={{ color: "#7aaddd", mt: 1, mb: 3, fontSize: "0.9rem" }}>
            The following examples show how stereotypes appear across television, film, and advertising.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <ExampleCard
              number="01"
              title="Teenagers as Reckless & Disrespectful"
              description="Teen characters in shows like Euphoria and Riverdale are routinely impulsive, substance-abusing, and dismissive of authority. This framing presents adolescence as inherently reckless, ignoring the vast majority of responsible, engaged young people."
              mediaLabel="TV / Streaming"
              imgSrc="/"
            />
            
            <ExampleCard
              number="02"
              title="Women as Overly Emotional in the Workplace"
              description='Advertising and film have long portrayed professional women as either cold and ruthless or too emotional to lead effectively. This double-bind stereotype, seen in countless workplace comedies, discourages women from asserting themselves professionally.'
              mediaLabel="Film / Advertising"
            />

            <ExampleCard
              number="03"
              title="Lower-Income Individuals as Lazy"
              description="Animated and live-action media frequently depicts working-class or impoverished characters that are unmotivated or content with poverty. Shows like Family Guy use this trope for laughs, reinforcing damaging misconceptions about economic hardship."
              mediaLabel="Animation / Advertising"
              hasImage
              imgSrc="/1234567890.gif"
              imgAlt="Animated Lazy Character Gif"
            />

          </Box>
        </Box>

        {/* Effects Card */}
        <Box sx={cardStyle}>
          <SectionLabel text="Real-World Effects" />
          <Typography variant="h6" sx={cardHeading}>
            Effects in Daily Life
          </Typography>
          <Typography sx={{ color: "#7aaddd", mt: 1, mb: 3, fontSize: "0.9rem" }}>
            The media's constant reinforcement of stereotypes doesn't just stay on screen, it shapes how we see ourselves and others.
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2.5 }}>
            {[
              {
                title: "Self-Fulfilling Prophecies",
                body: "When teens are constantly told they are irresponsible through media, some internalize this identity and act accordingly, a phenomenon backed by social psychology research on stereotype threat.",
              },
              {
                title: "Hiring & Workplace Bias",
                body: "Stereotypes about gender, race, and class directly influence hiring decisions. Employers unconsciously filter candidates through media-fed assumptions, limiting opportunities for entire groups.",
              },
              {
                title: "Reduced Empathy",
                body: "Frequent exposure to stereotyped portrayals makes audiences less likely to seek out or believe nuanced stories. Over time, this erodes empathy and reinforces an 'us vs. them' mentality.",
              },
              {
                title: "Mental Health Impact",
                body: "Individuals who see their identity group stereotyped negatively in media report higher levels of anxiety, lower self-esteem, and reduced sense of belonging, especially among youth.",
              },
            ].map((effect, i) => (
              <Box
                key={i}
                sx={{
                  p: 2.5,
                  borderRadius: 2,
                  backgroundColor: "rgba(20, 60, 130, 0.2)",
                  border: "1px solid rgba(80, 140, 220, 0.25)",
                }}
              >
                <Typography sx={{ fontWeight: 700, color: "#7eb8f7", mb: 1, fontSize: "0.9rem" }}>
                  {effect.title}
                </Typography>
                <Typography sx={{ color: "#7aaddd", fontSize: "0.875rem", lineHeight: 1.7 }}>
                  {effect.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Back Button */}
        <Box sx={{ textAlign: "center", mt: 5, display: "flex", justifyContent: "center", gap: 1.5}}>
          <Button
            variant="outlined"
            component={Link}
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            sx={{
              borderColor: "#3a7bd5",
              color: "#7eb8f7",
              px: 4,
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
            ← Back to Home
          </Button>
          <Button
            variant="outlined"
            component={Link}
            to="/DiversityAndInclusion"
            onClick={() => window.scrollTo(0, 0)}
            sx={{
              borderColor: "#3a7bd5",
              color: "#7eb8f7",
              px: 4,
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
            Diveristy and Inclusion →
          </Button>
        </Box>

      </Box>
    </Box>
  );
}

/* ── Sub-components ── */

function SectionLabel({ text }) {
  return (
    <Typography
      sx={{
        fontSize: "0.65rem",
        fontWeight: 700,
        letterSpacing: 3,
        color: "#5a9bf5",
        textTransform: "uppercase",
        mb: 1,
      }}
    >
      {text}
    </Typography>
  );
}

function ExampleCard({ number, title, description, mediaLabel, hasImage, imgSrc, imgAlt }) {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        backgroundColor: "rgba(15, 50, 110, 0.25)",
        border: "1px solid rgba(80, 140, 220, 0.2)",
      }}
    >
      <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
        <Typography
          sx={{
            fontSize: "1.8rem",
            fontWeight: 800,
            color: "rgba(58, 123, 213, 0.4)",
            lineHeight: 1,
            minWidth: 36,
            fontFamily: "'Georgia', serif",
          }}
        >
          {number}
        </Typography>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
            <Typography sx={{ fontWeight: 700, color: "#c8e4ff", fontSize: "0.95rem" }}>
              {title}
            </Typography>
            <Chip
              label={mediaLabel}
              size="small"
              sx={{
                backgroundColor: "rgba(30, 80, 160, 0.3)",
                color: "#7eb8f7",
                fontSize: "0.6rem",
                height: 18,
                fontWeight: 600,
                letterSpacing: 0.5,
                border: "1px solid rgba(100, 160, 255, 0.25)",
              }}
            />
          </Box>
          <Typography sx={{ color: "#7aaddd", fontSize: "0.875rem", lineHeight: 1.75 }}>
            {description}
          </Typography>
        </Box>
      </Box>
      {hasImage && (
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center", width: "100%" }}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            duration={800}
            style={{ maxWidth: 260, borderRadius: 8 }}
          />
        </Box>
      )}
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

const cardHeading = {
  fontFamily: "'Georgia', serif",
  color: "#c8e4ff",
  fontWeight: 700,
};

const infoBox = {
  p: 2.5,
  borderRadius: 2,
  backgroundColor: "rgba(15, 50, 120, 0.3)",
  border: "1px solid rgba(80, 140, 220, 0.18)",
};

const infoLabel = {
  fontSize: "0.65rem",
  fontWeight: 700,
  letterSpacing: 2,
  color: "#5a9bf5",
  mb: 1,
};

const infoText = {
  color: "#7aaddd",
  fontSize: "0.875rem",
  lineHeight: 1.75,
};

export default Stereotypes;