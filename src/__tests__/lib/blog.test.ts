import { getAllPosts, getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import fs from "fs";
import path from "path";

// Mock fs module
jest.mock("fs");
jest.mock("path");

const mockFs = fs as jest.Mocked<typeof fs>;
const mockPath = path as jest.Mocked<typeof path>;

describe("Blog Library", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockPath.join.mockImplementation((...args) => args.join("/"));
  });

  describe("getAllPosts", () => {
    it("should return empty array when directory does not exist", async () => {
      mockFs.existsSync.mockReturnValue(false);

      const posts = await getAllPosts();

      expect(posts).toEqual([]);
    });

    it("should return all posts sorted by date", async () => {
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockReturnValue(["post1.md", "post2.md"] as any);

      const mockFileContent1 = `---
title: Post 1
description: Description 1
date: 2024-03-15
author: Author 1
tags: [tag1, tag2]
---
Content of post 1`;

      const mockFileContent2 = `---
title: Post 2
description: Description 2
date: 2024-03-16
author: Author 2
tags: [tag3]
---
Content of post 2`;

      mockFs.readFileSync
        .mockReturnValueOnce(mockFileContent1)
        .mockReturnValueOnce(mockFileContent2);

      const posts = await getAllPosts();

      expect(posts).toHaveLength(2);
      expect(posts[0].title).toBe("Post 2"); // More recent first
      expect(posts[1].title).toBe("Post 1");
    });

    it("should filter out non-markdown files", async () => {
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockReturnValue([
        "post1.md",
        "readme.txt",
        "post2.md",
        ".DS_Store",
      ] as any);

      const mockFileContent = `---
title: Test Post
description: Test Description
date: 2024-03-15
---
Test content`;

      mockFs.readFileSync.mockReturnValue(mockFileContent);

      const posts = await getAllPosts();

      expect(posts).toHaveLength(2);
    });
  });

  describe("getPostBySlug", () => {
    it("should return post with correct metadata", async () => {
      const mockFileContent = `---
title: Test Post
description: Test Description
date: 2024-03-15
author: John Doe
tags: [cycling, paris]
image: /images/test.jpg
---
This is the content of the post.`;

      mockFs.readFileSync.mockReturnValue(mockFileContent);

      const post = await getPostBySlug("test-post");

      expect(post.slug).toBe("test-post");
      expect(post.title).toBe("Test Post");
      expect(post.description).toBe("Test Description");
      expect(post.author).toBe("John Doe");
      expect(post.tags).toEqual(["cycling", "paris"]);
      expect(post.image).toBe("/images/test.jpg");
    });

    it("should calculate reading time correctly", async () => {
      const mockFileContent = `---
title: Test Post
date: 2024-03-15
---
${"word ".repeat(400)}`;

      mockFs.readFileSync.mockReturnValue(mockFileContent);

      const post = await getPostBySlug("test-post");

      expect(post.readingTime).toBe(2); // 400 words / 200 words per minute
    });

    it("should convert markdown to HTML", async () => {
      const mockFileContent = `---
title: Test Post
date: 2024-03-15
---
# Heading

This is a paragraph.`;

      mockFs.readFileSync.mockReturnValue(mockFileContent);

      const post = await getPostBySlug("test-post");

      expect(post.content).toContain("<h1>");
      expect(post.content).toContain("Heading");
      expect(post.content).toContain("<p>");
      expect(post.content).toContain("This is a paragraph.");
    });

    it("should use default values for missing fields", async () => {
      const mockFileContent = `---
title: Minimal Post
---
Content`;

      mockFs.readFileSync.mockReturnValue(mockFileContent);

      const post = await getPostBySlug("minimal-post");

      expect(post.author).toBe("Admin");
      expect(post.description).toBe("");
      expect(post.tags).toEqual([]);
      expect(post.image).toBe("");
    });
  });

  describe("getAllPostSlugs", () => {
    it("should return empty array when directory does not exist", () => {
      mockFs.existsSync.mockReturnValue(false);

      const slugs = getAllPostSlugs();

      expect(slugs).toEqual([]);
    });

    it("should return all post slugs", () => {
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockReturnValue([
        "post1.md",
        "post2.md",
        "post3.md",
      ] as any);

      const slugs = getAllPostSlugs();

      expect(slugs).toEqual(["post1", "post2", "post3"]);
    });

    it("should filter out non-markdown files", () => {
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockReturnValue([
        "post1.md",
        "readme.txt",
        "post2.md",
        ".DS_Store",
        "image.png",
      ] as any);

      const slugs = getAllPostSlugs();

      expect(slugs).toEqual(["post1", "post2"]);
    });

    it("should remove .md extension from slugs", () => {
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockReturnValue([
        "test-post.md",
        "another-post.md",
      ] as any);

      const slugs = getAllPostSlugs();

      expect(slugs).not.toContain("test-post.md");
      expect(slugs).not.toContain("another-post.md");
      expect(slugs).toContain("test-post");
      expect(slugs).toContain("another-post");
    });
  });
});
