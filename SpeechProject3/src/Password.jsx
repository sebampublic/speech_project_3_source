import React, { useState } from "react";
import { Box, Typography, TextField, Button, Chip } from "@mui/material";

const PASSWORD = import.meta.env.VITE_PASSWORD;

export default function PasswordGate({ children }) {
  const [input, setInput] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (input === PASSWORD) {
      setAuthenticated(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  if (authenticated) {
    return children;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 420,
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
          border: "1px solid rgba(80, 140, 220, 0.2)",
          backgroundColor: "rgba(10, 40, 100, 0.3)",
          backdropFilter: "blur(4px)",
          textAlign: "center",
        }}
      >
        {/* ── Title Text Box ── */}
        <Box
          sx={{
            mb: 3,
            p: 2,
            borderRadius: 2,
            backgroundColor: "rgba(15, 50, 120, 0.3)",
            border: "1px solid rgba(80, 140, 220, 0.18)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Georgia', serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#c8e4ff",
              lineHeight: 1.6,
            }}
          >
            Diversity & Inclusion vs. Stereotypes
          </Typography>
          <Typography
            sx={{
              fontSize: "0.8rem",
              color: "#7aaddd",
              mt: 0.5,
            }}
          >
            Speech Project 3
          </Typography>
        </Box>

        <Chip
          label="PROTECTED SITE"
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
          variant="h5"
          sx={{
            fontFamily: "'Georgia', serif",
            fontWeight: 700,
            color: "#c8e4ff",
            mb: 1,
          }}
        >
          Enter Password
        </Typography>

        <Typography sx={{ color: "#7aaddd", fontSize: "0.875rem", mb: 3 }}>
          This site is password protected.
        </Typography>

        <TextField
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Password"
          error={error}
          helperText={error ? "Incorrect password, please try again." : ""}
          fullWidth
          size="small"
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              color: "#c8e4ff",
              "& fieldset": { borderColor: "rgba(80, 140, 220, 0.35)" },
              "&:hover fieldset": { borderColor: "#3a7bd5" },
              "&.Mui-focused fieldset": { borderColor: "#3a7bd5" },
            },
            "& .MuiInputBase-input::placeholder": { color: "#7aaddd", opacity: 1 },
            "& .MuiFormHelperText-root": { color: "#f87171" },
          }}
        />

        <Button
          onClick={handleSubmit}
          fullWidth
          variant="outlined"
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
          Enter
        </Button>
      </Box>
    </Box>
  );
}