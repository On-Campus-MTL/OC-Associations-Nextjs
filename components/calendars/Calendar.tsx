import { Calendar, Badge } from "rsuite";

import React from "react";

export default function EventCalendar(props) {
  function renderCell(date) {
    const list = getTodoList(date);

    if (list.length) {
      return <Badge className="calendar-todo-item-badge" />;
    }

    return null;
  }
  return (
    <div style={{ width: props.width }}>
      <Calendar compact bordered />{" "}
    </div>
  );
}
