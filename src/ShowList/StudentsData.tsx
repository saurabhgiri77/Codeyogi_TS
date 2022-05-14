import React from "react";

function StudentsData({ user }: any) {
  return (
    <div className="m-2 text-lg p-4">
      <img
        className="h-28 w-48 object-cover rounded-lg"
        src={user.picture.large}
      />
      <div className="text-sm mt-4">
        <h3>
          {user.name.title} {user.name.first} {user.name.last}
        </h3>
        <h3 className="text-indigo-600">{user.login.password}</h3>
      </div>
      <div className="flex mt-2">
        <a href="https://twitter.com/explore">
          <img
            className="h-6"
            src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png"
          />
        </a>
        <a href="https://www.linkedin.com/signup">
          <img
            className="h-6 ml-2 bg-gray-300"
            src="https://icon-library.com/images/linkedin-png-icon/linkedin-png-icon-6.jpg"
          />
        </a>
      </div>
    </div>
  );
}

export default StudentsData;
