import './styles.css'

export const TextInput = ({searchValue ,handleChange}) => {
    return (
        <input 
            className="text-input"
            onChange={handleChange}
            type="search"
            placeholder="Search here"
            value={searchValue} 
        />
    );
}