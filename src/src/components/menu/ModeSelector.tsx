import { DarkMode, LightMode } from "@mui/icons-material"
import { ListItem, ListItemButton, useColorScheme } from "@mui/joy"

export const ModeSelector = () => {
    const { mode, setMode } = useColorScheme()

    return (
        <ListItem role="none">
            <ListItemButton
                role="menuitem"
                component="button"
                title={mode === "light" ? "Turn dark" : "Turn light"}
                onClick={() => {
                    setMode(mode === "light" ? "dark" : "light")
                }}
            >
                {mode === "light" ? <LightMode /> : <DarkMode />}
            </ListItemButton>
        </ListItem>
    )
}