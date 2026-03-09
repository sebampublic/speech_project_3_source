import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const links = [
    { label: "Home", path: "/" },
    { label: "Stereotypes", path: "/Stereotypes" },
    { label: "Diversity & Inclusion", path: "/DiversityAndInclusion" },
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        borderBottom: "1px solid rgba(80, 140, 220, 0.2)",
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 2, sm: 3 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Title on the left */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Georgia', serif",
            fontWeight: 700,
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            color: "#c8e4ff",
            letterSpacing: "-0.3px",
          }}
        >
        Stereotypes vs. Diveristy and Inclusion in the Media 
        </Typography>

        {/* Links on the right */}
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {links.map((link) => (
            <Button
              key={link.path}
              component={Link}
              to={link.path}
              onClick={() => window.scrollTo(0, 0)}
              size="small"
              sx={{
                mx: 0.5,
                whiteSpace: "nowrap",
                textTransform: "none",
                fontWeight: location.pathname === link.path ? 700 : 500,
                fontSize: "0.85rem",
                color: location.pathname === link.path ? "#c8e4ff" : "#7aaddd",
                borderRadius: 2,
                px: 1.5,
                py: 0.7,
                backgroundColor:
                  location.pathname === link.path
                    ? "rgba(30, 80, 160, 0.35)"
                    : "transparent",
                border: location.pathname === link.path
                  ? "1px solid rgba(100, 160, 255, 0.3)"
                  : "1px solid transparent",
                "&:hover": {
                  backgroundColor: "rgba(30, 80, 160, 0.2)",
                  color: "#c8e4ff",
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;