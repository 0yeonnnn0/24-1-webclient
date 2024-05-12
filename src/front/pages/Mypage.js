import { useEffect } from "react";
import { useState } from "react";
import { PageName } from "../components/PageName";
import profile from "../assets/Profile1.jpeg";

function Mypage({ user }) {
  return (
    <div className="bg-white py-5">
      <div className="mx-auto min-h-screen max-w-6xl px-6">
        <div className="flex flex-row p-2 w-full flex-shrink-0">
          <MyProfile user={user} />
          <MyLogs user={user} />
        </div>
      </div>
    </div>
  );
}

function MyProfile({ user }) {
  return (
    <div className="flex flex-col min-h-screen gap-6 border-r-2 w-64 pr-6">
      <div className="w-52 h-52 bg-cyan-500 rounded-full text-center content-center">
        <img src={profile} alt="프로필 사진" />
      </div>
      <div>
        <h3 className="text-3xl font-bold mb-2">{user.username}</h3>
        <h4 className="break-all">{user.email}</h4>
      </div>
      <button className="border h-8 rounded">Edit Profile</button>
    </div>
  );
}

function MyLogs({ user }) {
  return (
    <div className="px-8 py-2 w-full">
      <PageName PageName={user.username} secondName={"'s log"} />
      <div>
        <TabComponent />
      </div>
    </div>
  );
}
export function TabComponent({ menuArr = ["All", "Func2Name", "Name2Func"] }) {
  const [currentTab, setCurrentTab] = useState(0);
  const [bodyData, setBodyData] = useState([]);

  function selectMenuHandler(index) {
    setCurrentTab(index);
  }

  useEffect(() => {
    setBodyData(getData(currentTab));
  }, [currentTab]);

  return (
    <div>
      <div className="flex flex-row gap-4 border-b">
        {menuArr.map((data, index) => {
          return (
            <button
              className={` py-2 px-3 font-semibold ${
                index === currentTab ? " border-b-2 border-cyan-400" : null
              }`}
              onClick={() => selectMenuHandler(index)}
            >
              {data}
            </button>
          );
        })}
      </div>
      <div className="px-3 py-4">
        {currentTab === 0 ? (
          <DataTable bodyData={bodyData} />
        ) : (
          <DataTable bodyData={bodyData} />
        )}
      </div>
    </div>
  );
}

function getData(index) {
  const body = [
    {
      name: `name2func`,
      client: "dusehd1",
      convert: "n2f",
      date: "2024-05-11",
    },
    {
      name: `convertBtn`,
      client: "dusehd1",
      convert: "n2f",
      date: "2024-05-11",
    },
    {
      name: `test`,
      client: "dusehd1",
      convert: "n2f",
      date: "2024-05-10",
    },
  ];
  return body;
}
const header = ["Name", "Convert", "Client", "Date"];

function DataTable({ bodyData }) {
  return (
    <table className=" w-full">
      <thead className="h-12">
        {header.map((data) => {
          return (
            <th className="border-b-2 py-3 text-left font-semibold">{data}</th>
          );
        })}
      </thead>
      <tbody className="">
        {bodyData?.map((data) => {
          return (
            <tr className="border-t h-14 font-medium">
              <td className="py-4">{data.name}</td>
              <td className="py-4">{data.convert}</td>
              <td className="py-4">{data.client}</td>
              <td className="py-4">{data.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Mypage;
