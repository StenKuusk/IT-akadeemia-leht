import React from 'react';

const FilterSection = ({
    label,
    value,
    onInputChange,
    suggestions,
    onSuggestionSelect,
    checkboxes,
}) => {
    return (
        <div className="filter-section">
            <h2>{label}</h2>
            <div className="filter-row">
                <div className="input-with-suggestions">
                    <input
                        type="text"
                        value={value}
                        onChange={onInputChange}
                        placeholder={`Kirjuta ${label.split(':')[0].toLowerCase()}`}
                    />
                    {suggestions.length > 0 && (
                        <ul className="suggestions-list">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => onSuggestionSelect(suggestion)}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {checkboxes.map((checkbox, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            checked={checkbox.checked}
                            onChange={checkbox.onChange}
                        />
                        {checkbox.label}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FilterSection;