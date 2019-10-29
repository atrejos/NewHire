import React, {useState} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const AppButtonDrop = (props) => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!isOpen)

    return (
        <ButtonDropdown isOpen={isOpen} toggle={toggle}>
            <DropdownToggle caret size="sm">
                Options
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    );
}

export default AppButtonDrop;