import { Box, Typography, Button, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { Image } from "mui-image";

function DiversityAndInclusion() {
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
            label="POSITIVE VALUE"
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
            Diversity & Inclusion
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
            A media value that appears as a representation of all people 
            across race, gender, ability, and background, as a marker of
            social progress and fairness.
          </Typography>
        </Box>

        {/* Definition Card */}
        <Box sx={cardStyle}>
          <SectionLabel text="Definition" />
          <Typography variant="h6" sx={cardHeading}>
            What Is Diversity & Inclusion?
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, mt: 2 }}>
            <Box sx={infoBox}>
              <Typography sx={infoLabel}>DENOTATION</Typography>
              <Typography sx={infoText}>
                The practice of including people from a range of different social
                and ethnic backgrounds, genders, abilities,
                and belief systems in a given space or institution.
              </Typography>
            </Box>
            <Box sx={infoBox}>
              <Typography sx={infoLabel}>CONNOTATION IN MASS MEDIA</Typography>
              <Typography sx={infoText}>
                In media, diversity and inclusion carry a broadly positive
                connotation that is framed as markers of progress and fairness.
                However, coverage can reduce them to surface-level
                representation without addressing deeper systemic change,
                leading to criticism of tokenism.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Connotation Card */}
        <Box sx={cardStyle}>
          <SectionLabel text="Connotation" />
          <Typography variant="h6" sx={cardHeading}>
            How Diversity & Inclusion Functions in Media
          </Typography>

          <Box component="ol" sx={{ mt: 2, pl: 3, color: "#7aaddd" }}>
            {[
              "Signaling social progress and modern values to audiences",
              "Expanding whose stories are told and centered in mainstream media",
              "Challenging historically narrow beauty and success standards",
              "Sometimes used performatively by brands without substantive commitment",
              "Encouraging audiences to see themselves and others more fully",
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
            Diversity & Inclusion in Mass Media
          </Typography>
          <Typography sx={{ color: "#7aaddd", mt: 1, mb: 3, fontSize: "0.9rem" }}>
            The following examples show how diversity and inclusion appear across television, film, and advertising.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <ExampleCard
              number="01"
              title="Inclusive Advertising"
              description="Brands like Dove and Target have prominently featured people of varying body sizes, skin tones, and abilities in their advertisements, directly pushing back against decades of narrow beauty standards promoted by mainstream media."
              mediaLabel="Advertising"
            />
            <ExampleCard
              number="02"
              title="Disability Representation"
              description="The casting of disabled actors in roles and humanizing portrayals of neurodivergent characters moves representation beyond the 'inspiration' trope that media historically relied on, showing disabled people as whole, complex individuals."
              mediaLabel="TV / Streaming"
            />
            <ExampleCard
              number="03"
              title="Diverse Casting in Film & TV"
              description="Shows like Abbott Elementary and Everything Everywhere All at Once center characters of color in fully realized, complex roles rather than as supporting stereotypes. This reflects a shift in what mainstream audiences expect and celebrate from their media."
              mediaLabel="TV / Film"
              hasImage
              imgSrc="/abbott.avif"
              imgAlt="Abbott Elementary cast"
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
            The media's emphasis on diversity and inclusion doesn't stay on screen, as it shapes self-perception, social attitudes, and institutional policy.
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2.5 }}>
            {[
              {
                title: "Self-Recognition & Belonging",
                body: "People who see themselves represented in media report higher self-esteem and a stronger sense of social belonging, particularly among minority youth who have historically been absent from mainstream storytelling.",
              },
              {
                title: "Reduced Prejudice",
                body: "Studies show that sustained exposure to diverse, humanizing portrayals of out-groups measurably reduces implicit bias over time, making inclusive media a genuine tool for social change.",
              },
              {
                title: "Workplace Culture Shifts",
                body: "Media narratives around diversity and inclusion have directly influenced corporate HR policies, DEI hiring initiatives, and workplace training programs across industries.",
              },
              {
                title: "Backlash Effect",
                body: "Heavy media focus on Diversity and Inclusion has also generated organized resistance, showing that media emphasis on a value can simultaneously normalize and polarize it, revealing deep divisions in how society responds to change.",
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
        <Box sx={{ textAlign: "center", mt: 5, gap: 1.5, display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            component={Link}
            onClick={() => window.scrollTo(0, 0)}
            to="/"
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
            to="/Stereotypes"
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
            To Stereotypes →
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
            style={{ maxWidth: 400, borderRadius: 8 }}
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

export default DiversityAndInclusion;