import { instagramPosts } from "@/lib/data/instagram-posts";
import { InstagramPost } from "@/types";

export class InstagramLocalService {
  /**
   * Get Instagram posts from local images
   */
  getPosts(limit: number = 8): InstagramPost[] {
    return instagramPosts.slice(0, limit);
  }

  /**
   * Get all Instagram posts (all 15 images)
   */
  getAllPosts(): InstagramPost[] {
    return instagramPosts;
  }

  /**
   * Get a specific post by ID
   */
  getPostById(id: string): InstagramPost | undefined {
    return instagramPosts.find((post) => post.id === id);
  }

  /**
   * Get posts by media type
   */
  getPostsByType(mediaType: "IMAGE" | "VIDEO"): InstagramPost[] {
    return instagramPosts.filter((post) => post.media_type === mediaType);
  }

  /**
   * Get random posts
   */
  getRandomPosts(limit: number = 8): InstagramPost[] {
    const shuffled = [...instagramPosts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
  }

  /**
   * Get posts with specific hashtags in caption
   */
  getPostsByHashtag(hashtag: string): InstagramPost[] {
    return instagramPosts.filter((post) =>
      post.caption?.toLowerCase().includes(hashtag.toLowerCase())
    );
  }

  /**
   * Get posts in a specific range
   */
  getPostsInRange(start: number, end: number): InstagramPost[] {
    return instagramPosts.slice(start - 1, end); // -1 because array is 0-indexed
  }
}

// Export singleton instance
export const instagramLocalService = new InstagramLocalService();
