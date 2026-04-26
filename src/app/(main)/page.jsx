import CategoryPage from "@/Components/homePage/CategoryPage";
import NewsPage from "@/Components/homePage/NewsPage";
import SocialPage from "@/Components/homePage/SocialPage";
import { getCategories, getNewsByC} from "@/lib/data";



export default async function Home() {
  const res = await getCategories();
  const categories = res.data.news_category;
  const re = await getNewsByC('08')
  const data = re.data;
  console.log(data)

  return (
    <div className="container mx-auto grid grid-cols-5 gap-3 my-8">
      <div className="">
        <CategoryPage categories={categories} activeId={"08"}></CategoryPage>
      </div>
      <div className=" col-span-3">
        <NewsPage data={data}></NewsPage>
      </div>
      <div className="">
        <SocialPage></SocialPage>
      </div>
    </div>
  );
}
