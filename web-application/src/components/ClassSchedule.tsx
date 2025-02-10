import React, { Component } from 'react';

interface ClassScheduleProps {
  groupId: string;
}

interface ClassScheduleState {
  schedules: Schedule[];
  loading: boolean;
}

interface Schedule {
  subject: string;
  teacher: string;
  room: string;
  time: string;
}

class ClassSchedule extends Component<ClassScheduleProps, ClassScheduleState> {
  constructor(props: ClassScheduleProps) {
    super(props);
    this.state = {
      schedules: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchSchedules();
  }

  fetchSchedules = async () => {
    try {
      const response = await fetch(`/api/schedules?groupId=${this.props.groupId}`);
      const data = await response.json();
      this.setState({ schedules: data, loading: false });
    } catch (error) {
      console.error('Error fetching schedules:', error);
      this.setState({ loading: false });
    }
  };

  render() {
    const { schedules, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>Class Schedule</h2>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Teacher</th>
              <th>Room</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule, index) => (
              <tr key={index}>
                <td>{schedule.subject}</td>
                <td>{schedule.teacher}</td>
                <td>{schedule.room}</td>
                <td>{schedule.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClassSchedule;