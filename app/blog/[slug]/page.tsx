import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { getBlogBySlug, blogPosts } from "@/lib/content/blog";
import { formatDate } from "@/lib/utils";

interface Props { params: { slug: string }; }

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <div className="pt-24">
      {/* Back */}
      <div className="container pt-8 mb-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>

      {/* Hero */}
      <header className="container max-w-3xl mx-auto mb-12">
        <ScrollReveal>
          <div className="mb-4">
            <span className="text-xs font-mono text-primary border border-primary/40 rounded px-2 py-1 bg-primary/10 uppercase tracking-wider">
              {post.category.replace("-", " ")}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            {post.title}
          </h1>
          <p className="text-lg text-text-muted mb-8 leading-relaxed">{post.excerpt}</p>
          {/* Meta */}
          <div className="flex items-center gap-5 py-5 border-y border-glass-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-2 border border-glass-border flex items-center justify-center">
                <span className="text-sm font-bold text-primary">{post.author.name[0]}</span>
              </div>
              <div>
                <div className="text-sm font-medium text-white">{post.author.name}</div>
                <div className="text-xs text-text-muted">{post.author.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-text-muted ml-auto">
              <Calendar className="w-3.5 h-3.5" />{formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-text-muted">
              <Clock className="w-3.5 h-3.5" />{post.readTime} min read
            </div>
          </div>
        </ScrollReveal>
      </header>

      {/* Cover image placeholder */}
      <div className="container max-w-4xl mx-auto mb-12">
        <div
          className="rounded-2xl h-72 md:h-96 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a0505 0%, #0d0808 60%, #160a0a 100%)" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl font-display font-bold text-primary/10" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              {post.title.split(" ").slice(0, 2).map(w => w[0]).join("")}
            </span>
          </div>
          {/* Replace with: <Image src={post.coverImage} alt={post.title} fill className="object-cover" /> */}
        </div>
      </div>

      {/* Article Content */}
      <article className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <div
            className="prose-axen"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/^# .+\n/m, "") // Remove the H1 (already in header)
                .replace(/\n/g, "<br/>")
                .replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) =>
                  `<pre><code class="language-${lang || ''}">${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`
                )
                .replace(/`([^`]+)`/g, "<code>$1</code>")
                .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
                .replace(/## (.+)/g, "<h2>$1</h2>")
                .replace(/### (.+)/g, "<h3>$1</h3>")
                .replace(/#### (.+)/g, "<h4>$1</h4>")
                .replace(/^\| .+/gm, (match) => `<table-row>${match}</table-row>`)
                .replace(/&gt; \[!NOTE\]/g, "")
            }}
          />
        </ScrollReveal>
      </article>

      {/* Tags */}
      <div className="container max-w-3xl mx-auto mt-10 pt-8 border-t border-glass-border">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section-padding bg-surface/30 mt-16">
          <div className="container">
            <ScrollReveal className="mb-10">
              <h2 className="text-2xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Related Articles
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="group p-5 rounded-xl border border-glass-border bg-surface hover:border-primary/25 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-xs text-text-muted mb-2">{formatDate(p.publishedAt)} · {p.readTime} min</div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-primary transition-colors mb-2 leading-snug">{p.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-primary mt-3">
                    Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-white mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Ready to Apply These <span className="gradient-text">Insights?</span>
            </h2>
            <p className="text-text-muted mb-8">Talk to our team about how these ideas can be applied to your specific business context.</p>
            <Link href="/contact">
              <Button variant="primary" size="lg" magnetic>Talk to Axen <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
