import React from "react";

const SchoolIcon = ({ color, size, padding }) => {
  return (
    <div
      className="mx-auto my-3"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: `${parseInt(size) + 8}px`,
        height: `${parseInt(size) + 8}px`,
        border: `${1}px solid ${color}`,
        borderRadius: "50%",
        padding: padding,
      }}
    >

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={color}
        width={size}
        height={size}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    </div>
  );
};

export default SchoolIcon;