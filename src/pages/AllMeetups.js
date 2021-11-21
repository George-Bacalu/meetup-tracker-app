import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [meetupsList, setMeetupsList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://http-requests-faf73-default-rtdb.firebaseio.com/meetups.json")
      .then(response => response.json())
      .then(data => {
        const meetups = [];
        for (const key in data) {
          const meetup = { id: key, ...data[key] };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setMeetupsList(meetups);
      });
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>All Meetups</h1>
      <MeetupList meetupsList={meetupsList} />
    </>
  );
};

export default AllMeetups;
