"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Category } from "@/types/category";
import { fetcher } from "@/utils/fetcher";
import { ResponseApi } from "@/types/response";
import { useQuery } from "@/context/QueryContext";

type CategoriesResponse = ResponseApi<{
  categories: Category[];
}>;

const CategorySelect = () => {
  const [isLoadingFetching, setIsLoadingFetching] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const { query, setQuery } = useQuery();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data }: CategoriesResponse = await fetcher("api/categories");
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoadingFetching(false);
      }
    }
    fetchCategories();
  }, []);

  const handleCheckboxChange = (categoryId: string | number) => {
    if (query?.category === categoryId) {
      setQuery("category", "");
    } else {
      setQuery(
        "category",
        categoryId === query.category ? "" : categoryId.toString()
      );
    }
  };

  return (
    <div className="bb-sidebar-block">
      <div className="bb-sidebar-title">
        <h3>Category</h3>
      </div>
      <div className="bb-sidebar-contact">
        <ul>
          {isLoadingFetching ? (
            <li>Loading...</li>
          ) : categories.length ? (
            categories.map((category) => (
              <li key={category.id}>
                <div className="bb-sidebar-block-item">
                  <input
                    type="checkbox"
                    checked={query.category === category.id}
                    onChange={() => handleCheckboxChange(category.id)}
                  />
                  <Link href="#">{category.name}</Link>
                  <span className="checked"></span>
                </div>
              </li>
            ))
          ) : (
            <li>Danh mục trống</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CategorySelect;
