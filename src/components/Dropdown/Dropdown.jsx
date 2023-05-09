import {DropdownBtn, DropdownContent, DropdownList} from "./Dropdown.styled";

const Dropdown = () => {
	return (
		<DropdownList>
			<DropdownBtn>Filter</DropdownBtn>
			<DropdownContent class="dropdown-content">
				<a href="#">Link 1</a>
				<a href="#">Link 2</a>
				<a href="#">Link 3</a>
			</DropdownContent>
		</DropdownList>
	);
};

export default Dropdown;
