
import { SidebarContainer } from "./styles";
import { MENU_ITEMS } from '../../constants/menuitem'
import { MenuItemList } from '../MenuItemList'





type SidebarProps = {
    isOpened: boolean;
};



const Sidebar = ({ isOpened }: SidebarProps) => {
    return (
        <SidebarContainer isOpened={isOpened}>
             <MenuItemList options={MENU_ITEMS} /> 
        </SidebarContainer>
    )
}


export default Sidebar; 