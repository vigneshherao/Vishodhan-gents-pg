import frontMatter from 'front-matter';

/**
 * Parses markdown content using front-matter
 * @param {string} markdown - Raw markdown string
 * @returns {Object} - { attributes, body }
 */
export const parseContent = (markdown) => {
    return frontMatter(markdown);
};

/**
 * Loads a single checkout file content
 * @param {string} filePath - Path relative to src/content (e.g., "home.md")
 * @returns {Promise<Object>} - Parsed content
 */
export const loadContent = async (filePath) => {
    try {
        // import.meta.glob is a Vite feature to import files
        const modules = import.meta.glob('../content/*.md', { as: 'raw' });
        const key = `../content/${filePath}`;

        if (modules[key]) {
            const markdown = await modules[key]();
            return parseContent(markdown);
        } else {
            console.error(`File not found: ${filePath}`);
            return null;
        }
    } catch (error) {
        console.error(`Error loading content: ${filePath}`, error);
        return null;
    }
};
