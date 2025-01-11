"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Category } from "@/types/category";
import { fetcher } from "@/utils/fetcher";
import { ResponseApi } from "@/types/response";

type CategoriesResponse = ResponseApi<{
  categories: Category[];
}>;

const CategorySelect = () => {
  const [isLoadingFetching, setIsLoadingFetching] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    string | number | null
  >(null);

  useEffect(() => {
    async function fetchCategories() {
      const { data, meta }: CategoriesResponse = await fetcher(
        "api/categories"
      );
      setCategories(data.categories);
      setIsLoadingFetching(false);
    }
    fetchCategories();
  }, []);

  const handleCheckboxChange = (categoryId: string | number) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
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
                    checked={selectedCategory === category.id}
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
