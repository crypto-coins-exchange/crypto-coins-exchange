import { DarkMode, LightMode } from "@mui/icons-material"
import { ListItem, ListItemButton, useColorScheme } from "@mui/joy"
import { StateProps } from "../../lib/state"

interface Props extends StateProps {

}

export const ModeSelector = (props: Props) => {
    const { mode, setMode } = useColorScheme()

    const updateMode = (newMode: "light" | "dark" | "system") => {
        setMode(newMode)
        props.setState({ theme: { isLight: newMode === "light" } })
    }

    return (
        <ListItem role="none">
            <ListItemButton
                role="menuitem"
                component="button"
                title={mode === "light" ? "Turn dark" : "Turn light"}
                onClick={() => {
                    updateMode(mode === "light" ? "dark" : "light")
                }}
            >
                {mode === "light" ? <LightMode /> : <DarkMode />}
            </ListItemButton>
        </ListItem>
    )
}