import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDisp, reset } from "../features/disp/dispSlice";

function Display() {
  const dispatch = useDispatch();

  const { display, isLoading, isError, message } = useSelector(
    (state) => state.display
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getDisp());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  console.log(display);

  return (
    <>
      {display.length > 0 && (
        <table class="table-fixed m-5 p-5">
          <thead>
            <tr>
              <th className="p-2">Id</th>
              <th className="p-2">State</th>
              <th className="p-2">Confirmed Cases</th>
              <th className="p-2">Cases on Admissin</th>
              <th className="p-2">Discharged </th>
              <th className="p-2">Deaths Cases</th>
            </tr>
          </thead>
          <tbody>
            {display.map((disp, id) => (
              <tr key={id}>
                <td className="p-2">{disp._id}</td>
                <td className="p-2">{disp.state}</td>
                <td className="p-2">{disp.confirmedCases}</td>
                <td className="p-2">{disp.casesOnAdmission}</td>
                <td className="p-2">{disp.discharged}</td>
                <td className="p-2">{disp.death}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Display;
