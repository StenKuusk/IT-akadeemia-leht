import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import './Timetable.css';

const Timetable = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [studyGroups, setStudyGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [allTimetables, setAllTimetables] = useState([]);

  const sheetsUrls = {
    studyGroups: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRBtCxSQprxlSQE2WVTOe-OQUhxSy2gvu4UTHowy6s1f84OSk1AzGsXl4EuibnmyzD3NGuNOPkuLX9n/pub?gid=1493850769&single=true&output=csv',
    timetable: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRBtCxSQprxlSQE2WVTOe-OQUhxSy2gvu4UTHowy6s1f84OSk1AzGsXl4EuibnmyzD3NGuNOPkuLX9n/pub?gid=0&single=true&output=csv',
  };

  useEffect(() => {
    const fetchStudyGroups = async () => {
      try {
        const response = await axios.get(sheetsUrls.studyGroups);
        Papa.parse(response.data, {
          header: false,
          skipEmptyLines: true,
          complete: (result) => {
            const groups = result.data
              .slice(1)
              .map((row, index) => ({
                id: `group${index}`,
                name: row[0],
                index: index,
              }));
            setStudyGroups(groups);
          },
          error: (error) => {
            setError('Ei saanud õppegruppe kätte.');
          },
        });
      } catch (error) {
        setError('Ei saanud õppegruppe kätte.');
      }
    };

    fetchStudyGroups();
  }, [sheetsUrls.studyGroups]);

  useEffect(() => {
    const fetchAllTimetables = async () => {
      try {
        const response = await axios.get(sheetsUrls.timetable);

        Papa.parse(response.data, {
          header: false,
          skipEmptyLines: true,
          complete: (result) => {
            const timetables = parseAllTimetables(result.data);
            setAllTimetables(timetables);
          },
          error: (error) => {
            setError('Ei saanud tunniplaani andmeid kätte.');
          },
        });
      } catch (error) {
        setError('Ei saanud tunniplaani andmeid kätte.');
      }
    };

    fetchAllTimetables();
  }, [sheetsUrls.timetable]);

  useEffect(() => {
    if (!selectedGroup || allTimetables.length === 0) return;

    setLoading(true);
    setError(null);

    const selectedGroupIndex = studyGroups.find((g) => g.id === selectedGroup)?.index;
    if (selectedGroupIndex === undefined) {
      setError('Valitud õppegruppi ei leitud.');
      setLoading(false);
      return;
    }

    const groupTimetable = allTimetables[selectedGroupIndex] || [];
    setLessons(groupTimetable);
    setLoading(false);
  }, [selectedGroup, allTimetables, studyGroups]);

  const parseAllTimetables = (data) => {
    const timetables = [];
    let currentDay = null;
    let currentTime = null;
    let currentGroupLessons = [];
    let groupIndex = -1;

    data.forEach((row, index) => {
      const value = row[0];

      if (!value) {
        if (currentGroupLessons.length > 0) {
          timetables.push([...currentGroupLessons]);
          currentGroupLessons = [];
          groupIndex++;
        }
        return;
      }

      if (value.match(/^[ETKNR]\s\d{2}\.\d{2}\.\d{4}$/)) {
        currentDay = value.split(' ')[1];
        return;
      }

      if (value.match(/^\d{1,2}:\d{2}\s-\s\d{1,2}:\d{2}$/)) {
        currentTime = value;
        return;
      }

      if (currentDay && currentTime) {
        const parts = value.split(';').map((part) => part.trim());
        if (parts.length >= 3) {
          const subject = parts[0];
          const teacher = parts[1];
          const room = parts[2];
          const breakInfo = parts[3] ? parts[3].replace('Söömine: ', '') : null;

          currentGroupLessons.push({
            day: currentDay,
            time: currentTime,
            subject,
            teacher,
            room,
            break: breakInfo,
          });
        }
      }
    });

    if (currentGroupLessons.length > 0) {
      timetables.push([...currentGroupLessons]);
    }

    return timetables;
  };

  const days = ['24.03.2025', '25.03.2025', '26.03.2025', '27.03.2025', '28.03.2025'];
  const times = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00', '20:00',
  ];

  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const getLessonStyle = (start, end) => {
    const startMinutes = timeToMinutes(start);
    const endMinutes = timeToMinutes(end);
    const startOfDay = timeToMinutes('08:00');
    const totalMinutes = 14 * 60;
    const top = ((startMinutes - startOfDay) / totalMinutes) * 100;
    const height = ((endMinutes - startMinutes) / totalMinutes) * 100;

    return {
      top: `${top}%`,
      height: `${height}%`,
    };
  };

  const renderTimetable = () => {
    return (
      <div className="schedule-container">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>AEG</th>
              {days.map((day, index) => (
                <th key={index}>{`${['E', 'T', 'K', 'N', 'R'][index]} ${day}`}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((time, rowIndex) => (
              <tr key={time}>
                <td>{time}</td>
                {days.map((day, colIndex) => {
                  const lessonsForDay = lessons.filter((lesson) => lesson.day === day);
                  return (
                    <td key={colIndex} className="schedule-cell">
                      {lessonsForDay.map((lesson, lessonIndex) => {
                        const timeParts = lesson.time.split(' - ');
                        if (timeParts.length !== 2) {
                          return null;
                        }
                        const lessonStart = timeToMinutes(timeParts[0]);
                        const lessonEnd = timeToMinutes(timeParts[1]);
                        const rowStart = timeToMinutes(time);
                        const rowEnd = rowStart + 60;

                        if (lessonStart < rowEnd && lessonEnd > rowStart) {
                          return (
                            <div
                              key={lessonIndex}
                              className="lesson"
                              style={getLessonStyle(timeParts[0], timeParts[1])}
                            >
                              <div className="lesson-time">{lesson.time}</div>
                              <div className="lesson-subject">{lesson.subject}</div>
                              <div className="lesson-teacher">{lesson.teacher}</div>
                              <div className="lesson-room">{lesson.room}</div>
                              {lesson.break && (
                                <div className="lesson-break">
                                  Söömine: {lesson.break}
                                </div>
                              )}
                            </div>
                          );
                        }
                        return null;
                      })}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const handleGroupSelect = (group) => {
    setSelectedGroup(group.id);
    setSearchTerm(group.name);
    setIsDropdownOpen(false);
    setLessons([]);
  };

  const filteredGroups = studyGroups.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="praktika-container">
      <h1>TUNNIPLAAN</h1>
      <div className="selection-group">
        <div className="selection-item">
          <label htmlFor="study-group">Vali õppegrupp</label>
          <div className="custom-dropdown" ref={dropdownRef}>
            <input
              type="text"
              id="study-group"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setIsDropdownOpen(true);
              }}
              onFocus={() => setIsDropdownOpen(true)}
              placeholder="tunniplaan"
              className="dropdown-input"
            />
            {isDropdownOpen && (
              <ul className="dropdown-list">
                {filteredGroups.length > 0 ? (
                  filteredGroups.map((group) => (
                    <li
                      key={group.id}
                      onClick={() => handleGroupSelect(group)}
                      className="dropdown-item"
                    >
                      {group.name}
                    </li>
                  ))
                ) : (
                  <li className="dropdown-item disabled">Õppegruppe ei leitud</li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      {selectedGroup ? (
        loading ? (
          <div>Laadimine...</div>
        ) : error ? (
          <div>{error}</div>
        ) : lessons.length > 0 ? (
          renderTimetable()
        ) : (
          <div>Valitud õppegrupil ei ole tunniplaani.</div>
        )
      ) : (
        <div>Palun vali õppegrupp, et näha tunniplaani.</div>
      )}
    </div>
  );
};

export default Timetable;