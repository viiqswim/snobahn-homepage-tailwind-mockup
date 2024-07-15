import React from "react";

export const Notifications = ({ notifications }) => {
  return (
    <div className="p-4">
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} className="bg-blue-100 p-2 rounded mb-2">
              {notification.message}
            </li>
          ))}
        </ul>
      ) : (
        <p>No notifications</p>
      )}
    </div>
  );
};
