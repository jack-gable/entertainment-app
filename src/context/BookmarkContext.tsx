"use client";

import { bookmarkCard } from "@/utils/types";
import React, { createContext, useContext, useState, useEffect } from "react";

interface BookmarkContextType {
  bookmarks: bookmarkCard[];
  addBookmark: (bookmark: bookmarkCard) => void;
  removeBookmark: (id: number) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
);

export const BookmarkProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bookmarks, setBookmarks] = useState<bookmarkCard[]>([]);

  // Load bookmarks from localStorage on initial render
  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  // Update localStorage whenever the bookmarks state changes
  useEffect(() => {
    if (bookmarks.length > 0) {
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  }, [bookmarks]);

  const addBookmark = (bookmark: bookmarkCard) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, bookmark]);
  };

  const removeBookmark = (id?: number) => {
    setBookmarks((prevBookmarks) => {
      const updatedBookmarks = prevBookmarks.filter(
        (bookmark) => bookmark.id !== id
      );
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks)); // Immediate update to localStorage
      return updatedBookmarks;
    });
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

// Hook to use the Bookmark context
export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
};
