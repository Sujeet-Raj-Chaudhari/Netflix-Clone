import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = axios.get("", {
          header: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGQzNmExNmVjMzAwNjk0NTUwNDMyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTMzMTA4NiwiZXhwIjoxNjU5NzYzMDg2fQ.lFCkkZ8-b0JjjgdSvwYuQFWn_ZcbgeEqf3g_xmI9CHk",
          },
        });

        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img src={user.profilePic || ""} alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.usename}</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
