import React from "react";
import { Article } from "../types/article";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div>
      <h2>{article.title}</h2>
    </div>
  );
}
