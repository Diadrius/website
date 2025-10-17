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
    const response = await fetch(`${import.meta.env.BASE_URL}content/pages/${pageName}.md`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${pageName}.md: ${response.statusText}`);
    }
    const text = await response.text();
    
    // Parse frontmatter and content
    const parsed = fm(text);
    const attributes = parsed.attributes as Record<string, any>;
    
    // Fix image paths to include base URL
    const baseUrl = import.meta.env.BASE_URL;
    const fixedAttributes: Record<string, any> = {};
    
    for (const [key, value] of Object.entries(attributes)) {
      // If the value is a string starting with /media/ or /content/, prepend base URL
      if (typeof value === 'string' && (value.startsWith('/media/') || value.startsWith('/content/'))) {
        fixedAttributes[key] = `${baseUrl}${value.substring(1)}`;
      } else {
        fixedAttributes[key] = value;
      }
    }
    
    return {
      ...fixedAttributes,
      body: parsed.body ? marked(parsed.body) : ''
    } as PageData;
  } catch (error) {
    console.error(`Error loading page ${pageName}:`, error);
    throw error;
  }
}
