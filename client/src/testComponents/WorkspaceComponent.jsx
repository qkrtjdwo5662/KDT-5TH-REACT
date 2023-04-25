import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { init } from '../store/modules/workspace';
export default function WorkspaceComponent() {
  const workspace = useSelector((state) => state.workspace);
  const dispatch = useDispatch();
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
      dispatch(init(data));
      // workspace = useSelector((state) => state.workspace);
      console.log(workspace);
      // dispatch(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getAllWS();
  }, []);
  // useEffect(() => {
  //   // dispatch(getAllWS());
  // }, [workspace]);

  return (
    <>
      <h1>workspace</h1>
      {/* {workData.map((item) => {
        return <div>{item.name}</div>;
      })} */}
      {/* <div>{workspace[0].workspace_name}</div> */}
      {/* <ul>
        {workspace.map((el, idx) => (
          <>
            <li>workspace{idx}</li>
            <ul>
              <li>workspace name: {el.workspace_name}</li>
            </ul>
          </>
        ))}
      </ul> */}
    </>
  );
}
