import { Translate } from '@google-cloud/translate';

// Initialize the Translation API client with your Google Cloud credentials
const translate = new Translate({
  projectId: 'your-project-id',
  keyFilename: 'path-to-your-service-account-key.json', // Provide the path to your service account key file
});

export const translateText = async (text: string, targetLanguage: string): Promise<string> => {
  try {
    const [translation] = await translate.translate(text, targetLanguage);
    return translation;
  } catch (error) {
    console.error('Translation error:', error);
    throw error;
  }
};
