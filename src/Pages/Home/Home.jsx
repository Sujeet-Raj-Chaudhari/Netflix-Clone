import React, { useEffect, useState } from "react";
import Featured from "../../Components/Featured/Featured";
import Navbar from "../../Components/Navbar/Navbar";
import "./home.scss";
import List from "../../Components/List/List";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGQzNmExNmVjMzAwNjk0NTUwNDMyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTMzMTA4NiwiZXhwIjoxNjU5NzYzMDg2fQ.lFCkkZ8-b0JjjgdSvwYuQFWn_ZcbgeEqf3g_xmI9CHk",
            },
          }
        );

        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
