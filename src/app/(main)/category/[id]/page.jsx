import CategoryPage from "@/Components/homePage/CategoryPage";
import NewsPage from "@/Components/homePage/NewsPage";
import SocialPage from "@/Components/homePage/SocialPage";
import { getCategories, getNewsByC } from "@/lib/data";
import React from "react";

const CategoryItemsPage = async ({ params }) => {
  const {id} = await params;
  const res = await getCategories();
  const categories = res.data.news_category;
  const re = await getNewsByC(id);
  const data = re.data;
  // console.log(paramsRes)

  return (
    <div className="container mx-auto grid grid-cols-5 gap-3">
      <div className="">
        <CategoryPage categories={categories} activeId={id}></CategoryPage>
      </div>
      <div className=" col-span-3">
        <NewsPage data={data}></NewsPage>
      </div>
      <div className="">
        <SocialPage></SocialPage>
      </div>
    </div>
  );
};

export default CategoryItemsPage;
