import React, { useState, useEffect } from "react";
import { api, endpoints } from "api/index";
import StudentProfile from "components/StudentProfile/StudentProfile";
import { Wrapper } from "components/SchoolNews/SchoolNews.styles";

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  const success = ({ data }) => {
    if (!data.length) return;
    setStudents(data);
  };

  const error = (error) => console.log(error);

  useEffect(() => {
    api.get(endpoints.users).then(success).catch(error);
  }, []);

  return (
    <Wrapper>
      {students.map((student) => (
        <StudentProfile key={student._id} studentData={student} />
      ))}
    </Wrapper>
  );
};

StudentsList.propTypes = {};

export default StudentsList;
