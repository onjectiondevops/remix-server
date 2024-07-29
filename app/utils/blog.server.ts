import { BlogPost } from '~/types';
import { envSchema } from '~/env.server';

import { getLocalFile, getLocalContent } from './fs.server';

let env = envSchema.parse(process.env);

const contentPath = 'app/content';

export const getCacheFile = async (file: string): Promise<BlogPost[]> => {
    return JSON.parse(await getLocalFile(file));
};

export const getDocs = async (): Promise<BlogPost[]> => {
    return getCacheFile('docs-cache.json');
};

export const getPages = async (): Promise<BlogPost[]> => {
    return getCacheFile('page-cache.json');
};

export const getFile = async (path: string): Promise<string> => {
        return getLocalFile(path);
};

export const getContent = async (path: string) => {
    try {
            return getLocalContent(path);
      
    } catch (error: any) {
        if (error.code?.includes('ENOENT')) {
            throw new Error('Not found');
        }
        throw error;
    }
};
