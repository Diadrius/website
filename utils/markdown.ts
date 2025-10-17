import fm from 'front-matter';
import { marked } from 'marked';

export interface PageData {
  title: string;
  subtitle?: string;
  heroImage?: string;
  heroImageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
  sectionTitle?: string;
  sectionText?: string;
  themesTitle?: string;
  body?: string;
  [key: string]: any;
}

export async function loadMarkdownPage(pageName: string): Promise<PageData> {
  try {
    const response = await fetch(`/content/pages/${pageName}.md`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${pageName}.md: ${response.statusText}`);
    }
    const text = await response.text();
    
    // Parse frontmatter and content
    const parsed = fm(text);
    
    return {
      ...parsed.attributes,
      body: parsed.body ? marked(parsed.body) : ''
    } as PageData;
  } catch (error) {
    console.error(`Error loading page ${pageName}:`, error);
    throw error;
  }
}