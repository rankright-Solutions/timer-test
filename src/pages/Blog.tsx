import React from 'react';
import Header from '@/components/Layout/Header';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const BLOG_POSTS = [
  {
    title: "The Power of the Pomodoro Technique",
    description: "Learn how to boost your productivity with timed work sessions.",
    date: "2024-02-20",
  },
  {
    title: "Why Time Management Matters",
    description: "Discover the benefits of effective time management in your daily life.",
    date: "2024-02-18",
  },
  {
    title: "Best Music for Focus and Concentration",
    description: "A curated list of music genres and playlists for better focus.",
    date: "2024-02-15",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <div className="grid gap-6">
            {BLOG_POSTS.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;