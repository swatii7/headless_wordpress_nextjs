import { v4 as uuid } from "uuid"

export const mapMainMenuItems = (menuItems) =>{
    return menuItems.map(item => ({
        id: uuid(),
        destination: item.destination?.uri,
        label: item.label
    }))
}