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
      <div></div>
      <ul>
        {dataArr.map((el, idx) => (
          <div key={idx}>
            <li>
              workspace{idx}
              <ul>
                <li>_id : {el._id}</li>
                <li>name : {el.workspace_name}</li>
                <li>category : {el.workspace_category}</li>
                <li>startDate : {el.workspace_startDate}</li>
                <li>endDate : {el.workspace_endDate}</li>
                <li>gitHub : {el.githubRepository}</li>
                <li>
                  member
                  <ul>
                    {el.member.map((el, idx) => (
                      <li key={idx}>
                        member{idx} : {el}
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  workflow
                  <ul>
                    <li>
                      todoList
                      <ul>
                        {el.workflow.todoList.map((el, idx) => (
                          <li key={idx}>
                            todoList{idx}
                            <ul>
                              <li>todoList content: {el.content}</li>
                              <li>todoList createDate: {el.createDate}</li>
                              <li>todoList endDate: {el.endDate}</li>
                              <li>todoList importance: {el.importance}</li>
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      inprogressList
                      <ul>
                        {el.workflow.inprogressList.map((el, idx) => (
                          <li key={idx}>
                            inprogressList{idx}
                            <ul>
                              <li>inprogressList content: {el.content}</li>
                              <li>
                                inprogressList createDate: {el.createDate}
                              </li>
                              <li>inprogressList endDate: {el.endDate}</li>
                              <li>
                                inprogressList importance: {el.importance}
                              </li>
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      doneList
                      <ul>
                        {el.workflow.doneList.map((el, idx) => (
                          <li key={idx}>
                            doneList{idx}
                            <ul>
                              <li>doneList content: {el.content}</li>
                              <li>doneList createDate: {el.createDate}</li>
                              <li>doneList endDate: {el.endDate}</li>
                              <li>doneList importance: {el.importance}</li>
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <hr />
          </div>
        ))}
      </ul>
    </>
  );
}
