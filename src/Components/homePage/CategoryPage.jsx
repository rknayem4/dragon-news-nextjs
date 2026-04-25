import Link from "next/link";
import React from "react";

const CategoryPage = ({ categories, activeId }) => {
  // console.log(categories);
  return (
    <div>
      <h2 className="text-2xl font-bold my-3">All Category</h2>
      <ul className="flex flex-col gap-2.5">
        {categories.map((data) => {
          return (
            <li
              className={`text-lg font-semibold text-center ${activeId === data.category_id && "bg-gray-100"}  rounded`}
              key={data.category_id}
            >
              <Link className=" block p-2" href={`/category/${data.category_id}`}>
                {data.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryPage;
