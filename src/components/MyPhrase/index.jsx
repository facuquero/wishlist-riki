import { CircularProgress, Grid, IconButton, useTheme } from "@mui/material"
import Typography from "../commons/Typography"
import BorderColorIcon from "@mui/icons-material/BorderColor"
import useAuth from "../../hooks/useAuth"
import { useLoaderData } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { useChangePhrase } from "../../../api/useUsersAPI"
import TextField from "../commons/TextField"
import CloseIcon from "@mui/icons-material/Close"
import DoneIcon from "@mui/icons-material/Done"
const MyPhrase = ({ actualPhrase }) => {
  const [newPhrase, setNewFhrase] = useState(false)
  const [newPhraseText, setNewFhraseText] = useState(
    () => actualPhrase || "Gracias por comprarme regalos!"
  )
  const newPhraseRef = useRef(null)
  const { data, execute, isError, isLoading } = useChangePhrase()
  const theme = useTheme()
  const { auth } = useAuth()
  const loaderData = useLoaderData()
  const isSameUserAsFiumbiUser =
    auth?.username == loaderData?.params?.fiumbiListUsername

  const handleClickEdit = () => {
    setNewFhrase(!newPhrase)
  }

  const handleClickNewPhrase = () => {
    execute({
      data: { username: auth?.username, phrase: newPhraseRef.current.value },
    })
  }

  useEffect(() => {
    if (data?.status == 200) {
      setNewFhraseText(newPhraseRef.current.value)
      setNewFhrase(false)
    }
  }, [data])
  return (
    <Grid container alignItems="center">
      {!newPhrase && (
        <Grid item>
          <Typography
            sx={{
              color: theme.palette.customGold.at239a1,
              fontStyle: "italic",
              whiteSpace: "normal",
              lineBreak: "normal",
              textShadow: "3px 5px 8px rgba(0, 0, 0, 0.45)",
              fontSize: { xs: "1.25rem", sm: "2rem" },
            }}
          >
            {newPhraseText}
          </Typography>
        </Grid>
      )}
      {newPhrase && (
        <Grid item xs="auto" my={2}>
          <TextField
            inputRef={newPhraseRef}
            size="small"
            label="Nuevo saludo"
            disabled={isLoading}
          />
        </Grid>
      )}
      {newPhrase && !isLoading && (
        <Grid item xs="auto" mx={2}>
          <IconButton
            onClick={handleClickNewPhrase}
            sx={{ color: theme.palette.customGold.at239a1 }}
          >
            <DoneIcon />
          </IconButton>
        </Grid>
      )}
      {isSameUserAsFiumbiUser && !isLoading && (
        <Grid item xs="auto" mx={2}>
          <IconButton
            onClick={handleClickEdit}
            sx={{ color: theme.palette.customGold.at239a1 }}
          >
            {!newPhrase && <BorderColorIcon />}
            {newPhrase && <CloseIcon />}
          </IconButton>
        </Grid>
      )}
      {isLoading && (
        <CircularProgress sx={{ color: theme.palette.customGold.at239a1 }} />
      )}
      {isError && (
        <Typography sx={{ color: theme.palette.customGold.at239a1 }}>
          Ocurrio un error al cambiar
        </Typography>
      )}
    </Grid>
  )
}

export default MyPhrase
