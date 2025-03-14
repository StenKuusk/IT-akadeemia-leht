import React, { useState } from 'react';
import './Timetable.css';
import FilterSection from './FilterSection'; // Assuming you'll create this component

const Timetable = () => {
    // State management
    const [filters, setFilters] = useState({
        group: '',
        teacher: '',
        classroom: '',
    });
    const [displayOptions, setDisplayOptions] = useState({
        showTimetable: false,
        showConsultations: false,
    });
    const [suggestions, setSuggestions] = useState({
        group: [],
        teacher: [],
        classroom: [],
    });

    // Predefined options
    const optionLists = {
        group: ['ITA24_Tarkvaraarendaja', 'ITA25_Veebirakenduste arendaja', 'Õppegrupp 3'],
        teacher: ['Õpetaja 1', 'Õpetaja 2', 'Õpetaja 3'],
        classroom: ['Ruum 1', 'Ruum 2', 'Ruum 3'],
    };

    // Utility function to filter suggestions
    const filterSuggestions = (inputValue, optionList) => {
        if (!inputValue) return [];
        return optionList.filter((item) =>
            item.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    // Event handlers
    const handleInputChange = (type) => (event) => {
        const value = event.target.value;
        setFilters((prev) => ({ ...prev, [type]: value }));

        const filtered = filterSuggestions(value, optionLists[type]);
        setSuggestions((prev) => ({ ...prev, [type]: filtered }));
    };

    const handleSuggestionSelect = (type, value) => {
        setFilters((prev) => ({ ...prev, [type]: value }));
        setSuggestions((prev) => ({ ...prev, [type]: [] }));
    };

    const handleDisplayOptionChange = (option) => (event) => {
        setDisplayOptions((prev) => ({ ...prev, [option]: event.target.checked }));
    };

    return (
        <div className="timetable-page-container">
            <h1>Tunniplaan</h1>
            <div className="timetable-filters">
                <FilterSection
                    label="Vali õppegrupp:"
                    value={filters.group}
                    onInputChange={handleInputChange('group')}
                    suggestions={suggestions.group}
                    onSuggestionSelect={(value) => handleSuggestionSelect('group', value)}
                    checkboxes={[
                        {
                            label: 'tunniplaan',
                            checked: displayOptions.showTimetable,
                            onChange: handleDisplayOptionChange('showTimetable'),
                        },
                    ]}
                />

                <FilterSection
                    label="Vali õpetaja:"
                    value={filters.teacher}
                    onInputChange={handleInputChange('teacher')}
                    suggestions={suggestions.teacher}
                    onSuggestionSelect={(value) => handleSuggestionSelect('teacher', value)}
                    checkboxes={[
                        {
                            label: 'tunniplaan',
                            checked: displayOptions.showTimetable,
                            onChange: handleDisplayOptionChange('showTimetable'),
                        },
                        {
                            label: 'konsultatsioonid',
                            checked: displayOptions.showConsultations,
                            onChange: handleDisplayOptionChange('showConsultations'),
                        },
                    ]}
                />

                <FilterSection
                    label="Vali ruum:"
                    value={filters.classroom}
                    onInputChange={handleInputChange('classroom')}
                    suggestions={suggestions.classroom}
                    onSuggestionSelect={(value) => handleSuggestionSelect('classroom', value)}
                    checkboxes={[]}
                />
            </div>
            
            <div className="timetable-content">
                {(filters.group || filters.teacher || filters.classroom) && (
                    <div>
                        <h3>Tunniplaan</h3>
                        <p>Valitud grupp: {filters.group || 'Ei ole valitud'}</p>
                        <p>Valitud õpetaja: {filters.teacher || 'Ei ole valitud'}</p>
                        <p>Valitud ruum: {filters.classroom || 'Ei ole valitud'}</p>
                        {displayOptions.showTimetable && <p>Näitan tunniplaani...</p>}
                        {displayOptions.showConsultations && <p>Näitan konsultatsioone...</p>}
                    </div>
                )}
                {!filters.group && !filters.teacher && !filters.classroom && (
                    <p>Palun sisesta grupp, õpetaja või ruum, et näha tunniplaani.</p>
                )}
            </div>
        </div>
    );
};

export default Timetable;