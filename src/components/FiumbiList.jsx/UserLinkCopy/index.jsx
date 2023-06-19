import {
  Box,
  IconButton,
  Snackbar,
  SnackbarContent,
  useTheme,
} from "@mui/material"
import Typography from "../../commons/Typography"
import { useState } from "react"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

const UserLinkCopy = ({ fiumbiListUsername }) => {
  const theme = useTheme()

  const [open, setOpen] = useState(false)
  const handleCopy = () => {
    setOpen(true)
    navigator.clipboard.writeText(window.location.href)
  }

  const vertical = "top",
    horizontal = "right"

  return (
    <Typography
      my={1}
      sx={{
        color: theme.palette.customGold.at239a1,
        textShadow: "3px 5px 8px rgba(0, 0, 0, 0.45)",
        cursor: "pointer",
        "-webkit-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
        fontSize: { xs: "1.75rem", sm: "2rem" },
      }}
      fontWeight="bold"
      onClick={handleCopy}
    >
      @{fiumbiListUsername}
      <IconButton sx={{ ml: 1 }}>
        <ContentCopyIcon sx={{ color: theme.palette.customGold.at239a1 }} />
      </IconButton>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical, horizontal }}
      >
        <SnackbarContent
          message="Link copiado"
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        />
      </Snackbar>
    </Typography>
  )
}

export default UserLinkCopy
