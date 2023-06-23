import { useEffect } from "react";
import { useState } from "react";

const API_GITHUB =
  "https://api.github.com/repos/CMOISDEAD/portfolio/branches/master";

export const useGithub = () => {
  const [user, setUser] = useState();
  const [commit, setCommit] = useState();

  useEffect(() => {
    fetch(API_GITHUB)
      .then((res) => res.json())
      .then((data) => {
        setCommit(data.commit.commit);
        setUser(data.commit.author);
      })
      .catch((err) => console.error(err));
  }, []);

  return { user, commit };
};
