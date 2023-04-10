import React, { useEffect, useState } from 'react';

export default function Workspace() {
  const [dataArr, setDataArr] = useState([]);
  const getAllWS = async () => {
    try {
      const resGetAllWS = await fetch('http://localhost:8001/workspace', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (resGetAllWS.status !== 200) return 'fail';
      const data = await resGetAllWS.json();
      console.log(data);
      setDataArr(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllWS();
  }, []);

  return (
    <>
      <h1>workspace</h1>
      <ul>
        {dataArr.map((el, idx) => (
          <div key={idx}>
            <li>_id : {el._id}</li>
            <ul>
              <li>name : {el.workspace_name}</li>
              <li>category : {el.workspace_category}</li>
              <li>startDate : {el.workspace_startDate}</li>
              <li>endDate : {el.workspace_endDate}</li>
              <li>gitHub : {el.githubRepository}</li>
              <li>
                member
                <ul>
                  {el.member.map((el, idx) => (
                    <li>
                      member{idx} : {el}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                workflow
                <ul>
                  {el.workflow.map((el, idx) => (
                    <li>
                      workflow{idx}
                      <ul>
                        <li>name: {el.name}</li>
                        <li>startDate: {el.startDate}</li>
                        <li>endDate: {el.endDate}</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <hr />
          </div>
        ))}
      </ul>
    </>
  );
}
