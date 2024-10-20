"use client";

import { useBookmarks } from "@/context/BookmarkContext";
import { bookmarkCard } from "@/utils/types";
import React, { useState, useEffect } from "react";
import Icon from "./Icon";

interface BookmarkButtonProps {
  item?: bookmarkCard;
}

const BookmarkButton = ({ item }: BookmarkButtonProps) => {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (!item || !item.id) return;

    const isAlreadyBookmarked = bookmarks.some(
      (bookmark) => bookmark.id === item.id
    );
    setIsBookmarked(isAlreadyBookmarked);
  }, [bookmarks, item]);

  // Toggle bookmark status
  const handleToggleBookmark = () => {
    if (!item || !item.id) {
      console.error("Cannot add or remove bookmark without an id");
      return;
    }

    const bookmarkToAdd = { ...item };

    if (isBookmarked) {
      removeBookmark(item.id);
    } else {
      addBookmark(bookmarkToAdd);
    }
    setIsBookmarked(!isBookmarked);
  };

  return (
    <button
      onClick={handleToggleBookmark}
      aria-label={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
    >
      <Icon
        id={isBookmarked ? "bookmark" : "bookmarkOutline"}
        size={18}
        className={`${
          isBookmarked ? "text-yellow-500" : "text-white hover:text-yellow-500"
        }`}
      />
    </button>
  );
};

export default BookmarkButton;
