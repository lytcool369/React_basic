import React from "react";

const data = {
  yunteak: {
    name: "임윤택",
    desc: "안녕하세요. 반갑습니다.",
  },
  dolye: {
    name: "둘리",
    desc: "100만년만에 깨어나...",
  },
};

// 방법 1
// props에서 중괄호{} 를 넣어 match를 unpacking
const Profile = ({ match }) => {
  // match에서 중괄호{} 를 넣어 username를 unpacking
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }

  return (
    <div>
      <p>
        {username}({profile.name})
      </p>
      <p>{profile.desc}</p>
    </div>
  );
};

// 방법 2
// const Profile = (props) => {
//   const username = props.match.params.username;
//   const profile = data[username];
//   console.log(profile);

//   if (!profile) {
//     return <div>존재하지 않는 사용자 입니다.</div>;
//   }

//   return (
//     <div>
//       <p>
//         {username}({profile.name})
//       </p>
//       <p>{profile.desc}</p>
//     </div>
//   );
//   return <div></div>;
// };

export default Profile;
