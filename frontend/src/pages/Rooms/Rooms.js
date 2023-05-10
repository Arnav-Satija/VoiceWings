import React from "react";
import RoomCard from "../../components/RoomCard/RoomCard";
import styles from "./Rooms.module.css";

const rooms = [
  {
    id: 1,
    topic: "Which framework best for frontend ?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: "/images/Monkey.png",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar: "/images/Monkey.png",
      },
    ],
    totalPeople: 20,
  },
  {
    id: 3,
    topic: "What's new in machine learning?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: "/images/Monkey.png",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar: "/images/Monkey.png",
      },
    ],
    totalPeople: 30,
  },
  {
    id: 4,
    topic: "Why people use stack overflow?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: "/images/Monkey.png",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar: "/images/Monkey.png",
      },
    ],
    totalPeople: 10,
  },
  {
    id: 5,
    topic: "Artificial inteligence is the future?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: "/images/Monkey.png",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar: "/images/Monkey.png",
      },
    ],
    totalPeople: 44,
  },
];

const Rooms = () => {
  return (
    <>
      <div className="container">
        <div className={styles.roomsHeader}>
          <div className={styles.left}>
            <span className={styles.heading}>All voice rooms</span>
            <div className={styles.searchBox}>
              <img src="/images/Search.png" alt="search" />
              <input type="text" className={styles.searchInput} />
            </div>
          </div>
          <div className={styles.right}>
            <button className={styles.startRoomButton}>
              <img src="/images/Start.png" alt="add-room" />
              <span>Start a room</span>
            </button>
          </div>
        </div>

        <div className={styles.roomList}>
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Rooms;