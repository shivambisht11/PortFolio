import React from "react";
import compose from "../../public/Jetpack-compose.png";
import andStd from "../../public/android.webp";
import java from "../../public/java.png";
import kotlin from "../../public/kotlin.webp";
import firebase from "../../public/firebase.png";
import sql from "../../public/sql.png";
import python from "../../public/python.webp";
import github from "../../public/github.png";

const Experiance = () => {
  const cardItem = [
    {
      id: 1,
      logo: compose,
      name: "JetpackCompose",
    },
    {
      id: 2,
      logo: andStd,
      name: "Android Studio",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: kotlin,
      name: "Kotlin",
    },
    {
      id: 5,
      logo: firebase,
      name: "FireBase",
    },
    {
      id: 6,
      logo: sql,
      name: "SQLite",
    },
    {
      id: 7,
      logo: python,
      name: "Python",
    },
    {
      id: 8,
      logo: github,
      name: "GitHub",
    },
  ];
  return (
    <>
      <div name="Experiance" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
        <div>
          <h1 className="text-3xl font-bold mb-5">Experiance</h1>
          <p className="mb-8">
            I've more than 1 years of experiance in below technologies.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-7 space-x-4 my-3">
            {cardItem.map(({ id, logo, name }) => (
              <div
                className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[230px] md:h-[230px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[150px] rounded-full"
                  alt=""
                />
                <div>
                  <div className="">{name}</div>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiance;
