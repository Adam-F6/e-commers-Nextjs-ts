'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryDetails() {
  const params = useParams(); 
  const id = params?.id as string;

  const [category, setCategory] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchCategory = async () => {
      try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
        const data = await res.json();
        setCategory(data.data);
      } catch (error) {
        console.error("Error fetching category:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id]);

  if (loading) return <div className="pt-16">

    <div className="bg-amber-50 p-6 pt-16">
<div className="  py-12 sm:18 xl:py-24 w-fit mx-auto ">

    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[275px] bg-zinc-200 w-[450px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-12 bg-zinc-200 w-[450px]" />
        <Skeleton className="h-12 bg-zinc-200 w-[400px]" />
      </div>
    </div>
</div>
    </div>

  </div>;
console.log(category)
  return (
    <div className="bg-amber-50 p-6 pt-16">
<div className="  py-12 sm:18 xl:py-24  w-fit mx-auto text-center">



      <img src={category?.image} width={500} height={400} alt={category?.name} className="object-cover" />


      <h1 className="text-3xl font-bold text-amber-950">{category?.name}</h1>

</div>
    </div>
  );
}